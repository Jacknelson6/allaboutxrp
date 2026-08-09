import fs from "node:fs";

const siteUrl = (process.argv[2] || process.env.SITE_URL || "https://allaboutxrp.com").replace(
  /\/$/,
  "",
);
const expectedOrigin = new URL(siteUrl).origin;
const configSource = fs.readFileSync("next.config.ts", "utf8");
const seoPolicySource = fs.readFileSync("src/lib/seo/noindex-pages.ts", "utf8");

const aliasRedirects = [
  ...seoPolicySource.matchAll(/\["(\/[^"\n]+)",\s*"(\/[^"\n]+)"\]/g),
].map((match) => ({ source: match[1], destination: match[2], permanent: true }));

const configuredRedirects = [
  ...configSource.matchAll(
    /\{ source:\s*["'](\/[^"'\n]+)["'], destination:\s*["'](\/[^"'\n]+)["'], permanent:\s*(true|false) \}/g,
  ),
].map((match) => ({
  source: match[1],
  destination: match[2],
  permanent: match[3] === "true",
}));

const redirects = [
  ...new Map([...aliasRedirects, ...configuredRedirects].map((rule) => [rule.source, rule])).values(),
];
const redirectSources = new Set(redirects.map((rule) => rule.source));
const failures = [];

for (const rule of redirects) {
  if (rule.source === rule.destination) failures.push(`${rule.source} redirects to itself.`);
  if (redirectSources.has(rule.destination)) {
    failures.push(`${rule.source} redirects through another redirect at ${rule.destination}.`);
  }
  if (!rule.permanent) failures.push(`${rule.source} is configured as a temporary redirect.`);
}

async function fetchWithRetry(url, options, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  throw lastError;
}

let cursor = 0;
async function validateRedirect() {
  while (cursor < redirects.length) {
    const rule = redirects[cursor++];
    const sourceUrl = `${siteUrl}${rule.source}`;

    try {
      const response = await fetchWithRetry(sourceUrl, {
        redirect: "manual",
        headers: { "user-agent": "AllAboutXRP-Redirect-Audit/1.0" },
      });
      const location = response.headers.get("location");
      const destination = location ? new URL(location, sourceUrl) : null;

      if (![301, 308].includes(response.status)) {
        failures.push(`${rule.source} returned ${response.status}; expected a permanent redirect.`);
      }
      if (!destination) {
        failures.push(`${rule.source} returned no Location header.`);
        continue;
      }
      if (destination.origin !== expectedOrigin || destination.pathname !== rule.destination) {
        failures.push(`${rule.source} redirects to ${destination.href}; expected ${rule.destination}.`);
        continue;
      }

      const finalResponse = await fetchWithRetry(destination, {
        redirect: "manual",
        headers: { "user-agent": "AllAboutXRP-Redirect-Audit/1.0" },
      });
      if (finalResponse.status !== 200) {
        failures.push(
          `${rule.source} destination ${rule.destination} returned ${finalResponse.status}${
            finalResponse.headers.get("location")
              ? ` -> ${finalResponse.headers.get("location")}`
              : ""
          }.`,
        );
      }
    } catch (error) {
      failures.push(`${rule.source} could not be verified: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => validateRedirect()));

const report = {
  siteUrl,
  redirectsChecked: redirects.length,
  redirectChains: failures.filter((failure) => failure.includes("another redirect")),
  failures,
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
