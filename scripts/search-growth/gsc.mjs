import { createHash, randomBytes } from "node:crypto";
import { createServer } from "node:http";
import { chmod, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { addDays, invariant, parseIsoDate } from "./utils.mjs";

const AUTHORIZATION_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const SEARCH_CONSOLE_ENDPOINT = "https://www.googleapis.com/webmasters/v3";
export const SEARCH_CONSOLE_READONLY_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
export const DEFAULT_GSC_TOKEN_PATH = path.join(os.homedir(), ".config", "aaxrp-search-growth", "gsc-oauth.json");

function base64Url(value) {
  return Buffer.from(value).toString("base64url");
}

async function readOAuthClient(clientPath) {
  const input = JSON.parse(await readFile(clientPath, "utf8"));
  const client = input.installed;
  invariant(client?.client_id && client?.client_secret, "OAuth client must be a Google Desktop app credential");
  return { clientId: client.client_id, clientSecret: client.client_secret };
}

async function writePrivateJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true, mode: 0o700 });
  await chmod(path.dirname(filePath), 0o700);
  const temporary = `${filePath}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", mode: 0o600 });
  await chmod(temporary, 0o600);
  await rename(temporary, filePath);
  await chmod(filePath, 0o600);
}

async function jsonResponse(response, label) {
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`${label} returned non-JSON HTTP ${response.status}`);
  }
  if (!response.ok) {
    const detail = body.error_description || body.error?.message || body.error || `HTTP ${response.status}`;
    throw new Error(`${label} failed: ${detail}`);
  }
  return body;
}

export function buildAuthorizationUrl({ clientId, redirectUri, state, codeChallenge }) {
  const url = new URL(AUTHORIZATION_ENDPOINT);
  url.search = new URLSearchParams({
    access_type: "offline",
    client_id: clientId,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    include_granted_scopes: "false",
    prompt: "consent",
    redirect_uri: redirectUri,
    response_type: "code",
    scope: SEARCH_CONSOLE_READONLY_SCOPE,
    state
  }).toString();
  return url.href;
}

async function exchangeAuthorizationCode({ clientId, clientSecret, code, codeVerifier, redirectUri, fetchImpl }) {
  const response = await fetchImpl(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      code_verifier: codeVerifier,
      grant_type: "authorization_code",
      redirect_uri: redirectUri
    })
  });
  return jsonResponse(response, "Google OAuth token exchange");
}

export async function authorizeSearchConsole({ clientPath, tokenPath = DEFAULT_GSC_TOKEN_PATH, fetchImpl = fetch, onAuthorizationUrl = console.log, timeoutMs = 300_000 }) {
  const { clientId, clientSecret } = await readOAuthClient(clientPath);
  const state = base64Url(randomBytes(24));
  const codeVerifier = base64Url(randomBytes(48));
  const codeChallenge = base64Url(createHash("sha256").update(codeVerifier).digest());
  let settle;
  const callback = new Promise((resolve, reject) => { settle = { resolve, reject }; });
  const server = createServer((request, response) => {
    try {
      const url = new URL(request.url, "http://127.0.0.1");
      if (url.pathname !== "/oauth2/callback") {
        response.writeHead(404).end("Not found");
        return;
      }
      const error = url.searchParams.get("error");
      const returnedState = url.searchParams.get("state");
      const code = url.searchParams.get("code");
      invariant(!error, `Google authorization was denied: ${error}`);
      invariant(returnedState === state, "Google authorization state did not match");
      invariant(code, "Google authorization returned no code");
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end("<!doctype html><meta name=\"robots\" content=\"noindex,nofollow\"><title>Authorization complete</title><main style=\"font:18px system-ui;max-width:680px;margin:80px auto\"><h1>Search Console connected</h1><p>You can return to Codex. This tab can be closed.</p></main>");
      settle.resolve(code);
    } catch (error) {
      response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
      response.end("Authorization failed. Return to Codex.");
      settle.reject(error);
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  const redirectUri = `http://127.0.0.1:${address.port}/oauth2/callback`;
  const authorizationUrl = buildAuthorizationUrl({ clientId, redirectUri, state, codeChallenge });
  onAuthorizationUrl(authorizationUrl);
  const timeout = setTimeout(() => settle.reject(new Error("Google authorization timed out after five minutes")), timeoutMs);
  try {
    const code = await callback;
    const tokens = await exchangeAuthorizationCode({ clientId, clientSecret, code, codeVerifier, redirectUri, fetchImpl });
    invariant(tokens.refresh_token, "Google returned no refresh token. Revoke the app connection and authorize again.");
    invariant(String(tokens.scope || "").split(" ").includes(SEARCH_CONSOLE_READONLY_SCOPE), "Google did not grant the Search Console read-only scope");
    const stored = {
      schemaVersion: 1,
      clientId,
      clientSecret,
      refreshToken: tokens.refresh_token,
      accessToken: tokens.access_token,
      expiresAt: Date.now() + Number(tokens.expires_in || 3600) * 1000,
      scope: tokens.scope,
      tokenType: tokens.token_type || "Bearer"
    };
    await writePrivateJson(tokenPath, stored);
    return { tokenPath, scope: stored.scope };
  } finally {
    clearTimeout(timeout);
    server.closeAllConnections?.();
    await new Promise((resolve) => server.close(resolve));
  }
}

async function accessToken({ tokenPath = DEFAULT_GSC_TOKEN_PATH, fetchImpl = fetch }) {
  const stored = JSON.parse(await readFile(tokenPath, "utf8"));
  invariant(stored.schemaVersion === 1 && stored.clientId && stored.clientSecret && stored.refreshToken, "Stored Search Console authorization is invalid");
  if (stored.accessToken && Number(stored.expiresAt) > Date.now() + 60_000) return stored.accessToken;
  const response = await fetchImpl(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: stored.clientId,
      client_secret: stored.clientSecret,
      refresh_token: stored.refreshToken,
      grant_type: "refresh_token"
    })
  });
  const refreshed = await jsonResponse(response, "Google OAuth refresh");
  invariant(refreshed.access_token, "Google OAuth refresh returned no access token");
  stored.accessToken = refreshed.access_token;
  stored.expiresAt = Date.now() + Number(refreshed.expires_in || 3600) * 1000;
  stored.scope = refreshed.scope || stored.scope;
  stored.tokenType = refreshed.token_type || stored.tokenType;
  await writePrivateJson(tokenPath, stored);
  return stored.accessToken;
}

async function authorizedJson(url, { token, fetchImpl = fetch, ...options } = {}) {
  const response = await fetchImpl(url, {
    ...options,
    headers: { ...(options.headers || {}), authorization: `Bearer ${token}` }
  });
  return jsonResponse(response, "Search Console API");
}

export async function listSearchConsoleSites({ tokenPath = DEFAULT_GSC_TOKEN_PATH, fetchImpl = fetch } = {}) {
  const token = await accessToken({ tokenPath, fetchImpl });
  const body = await authorizedJson(`${SEARCH_CONSOLE_ENDPOINT}/sites`, { token, fetchImpl });
  return body.siteEntry || [];
}

export function selectSearchConsoleProperty(sites, { origin, preferred } = {}) {
  invariant(Array.isArray(sites) && sites.length > 0, "The authorized Google account has no Search Console properties");
  if (preferred) {
    const exact = sites.find((site) => site.siteUrl === preferred);
    invariant(exact, `Configured Search Console property is not available: ${preferred}`);
    return exact;
  }
  const hostname = new URL(origin).hostname.replace(/^www\./, "");
  const domain = sites.find((site) => site.siteUrl === `sc-domain:${hostname}`);
  if (domain) return domain;
  const candidates = sites.filter((site) => {
    if (!site.siteUrl?.startsWith("http")) return false;
    const property = new URL(site.siteUrl);
    return property.hostname.replace(/^www\./, "") === hostname;
  });
  invariant(candidates.length > 0, `No Search Console property matches ${hostname}`);
  candidates.sort((left, right) => {
    const leftUrl = new URL(left.siteUrl);
    const rightUrl = new URL(right.siteUrl);
    return leftUrl.pathname.length - rightUrl.pathname.length || Number(rightUrl.protocol === "https:") - Number(leftUrl.protocol === "https:");
  });
  return candidates[0];
}

export async function querySearchAnalytics({ siteUrl, startDate, endDate, token, fetchImpl = fetch, rowLimit = 25_000 }) {
  const start = parseIsoDate(startDate, "start");
  const end = parseIsoDate(endDate, "end");
  invariant(start <= end, "Search Console pull start must not follow end");
  const days = Math.round((end.valueOf() - start.valueOf()) / 86_400_000) + 1;
  invariant(days <= 120, "A single Search Console pull is limited to 120 days");
  invariant(Number.isInteger(rowLimit) && rowLimit >= 1 && rowLimit <= 25_000, "Search Console rowLimit must be between 1 and 25,000");
  const rows = [];
  let requestCount = 0;
  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    let startRow = 0;
    for (;;) {
      const body = await authorizedJson(`${SEARCH_CONSOLE_ENDPOINT}/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
        token,
        fetchImpl,
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          startDate: date,
          endDate: date,
          dimensions: ["query", "page"],
          type: "web",
          aggregationType: "auto",
          dataState: "final",
          rowLimit,
          startRow
        })
      });
      requestCount += 1;
      const pageRows = body.rows || [];
      rows.push(...pageRows);
      if (pageRows.length < rowLimit) break;
      startRow += rowLimit;
      invariant(startRow <= 2_500_000, `Search Console pagination exceeded the safety limit for ${date}`);
    }
  }
  return {
    schemaVersion: 1,
    source: "google-search-console-api",
    property: siteUrl,
    searchType: "web",
    dimensions: ["query", "page"],
    dataState: "final",
    period: { start: startDate, end: endDate },
    requestCount,
    pulledAt: new Date().toISOString(),
    limitations: ["Search Console may omit anonymized queries and does not guarantee every row."],
    rows
  };
}

export async function pullSearchConsoleEvidence({ tokenPath = DEFAULT_GSC_TOKEN_PATH, origin, preferredProperty, startDate, endDate, fetchImpl = fetch }) {
  const token = await accessToken({ tokenPath, fetchImpl });
  const sitesBody = await authorizedJson(`${SEARCH_CONSOLE_ENDPOINT}/sites`, { token, fetchImpl });
  const property = selectSearchConsoleProperty(sitesBody.siteEntry || [], { origin, preferred: preferredProperty });
  return querySearchAnalytics({ siteUrl: property.siteUrl, startDate, endDate, token, fetchImpl });
}
