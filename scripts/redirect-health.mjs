import fs from "node:fs";

import { checkHostNormalization, fetchWithRetry } from "./lib/http-checks.mjs";

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
const criticalIndexablePaths = [
  "/",
  "/live-chart",
  "/tools/escrow-tracker",
  "/news",
  "/sitemap.xml",
];
const normalizationOrigins = expectedOrigin === "https://allaboutxrp.com"
  ? [
      "http://allaboutxrp.com",
      "http://www.allaboutxrp.com",
      "https://www.allaboutxrp.com",
    ]
  : [];
const retiredPaths = [
  "/donate",
  "/pricing",
  "/digest",
  "/digest/retired-example",
  "/api/digests",
  "/api/newsletter",
  "/api/subscribe",
  "/subscribe",
];

for (const rule of redirects) {
  if (rule.source === rule.destination) failures.push(`${rule.source} redirects to itself.`);
  if (redirectSources.has(rule.destination)) {
    failures.push(`${rule.source} redirects through another redirect at ${rule.destination}.`);
  }
  if (!rule.permanent) failures.push(`${rule.source} is configured as a temporary redirect.`);
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
      if (/noindex/i.test(finalResponse.headers.get("x-robots-tag") ?? "")) {
        failures.push(`${rule.source} destination ${rule.destination} is noindex.`);
      }
    } catch (error) {
      failures.push(`${rule.source} could not be verified: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => validateRedirect()));

let normalizationCursor = 0;
const normalizationChecks = normalizationOrigins.flatMap((origin) =>
  criticalIndexablePaths.map((pathname) => ({ origin, pathname })),
);

async function validateHostNormalization() {
  while (normalizationCursor < normalizationChecks.length) {
    const { origin, pathname } = normalizationChecks[normalizationCursor++];
    const sourceUrl = `${origin}${pathname}`;
    const expectedUrl = `${expectedOrigin}${pathname}`;

    try {
      const normalizationFailures = await checkHostNormalization({
        sourceUrl,
        expectedUrl,
        fetchUrl: (url) => fetchWithRetry(url, {
          redirect: "manual",
          headers: { "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)" },
        }),
      });
      failures.push(...normalizationFailures);
    } catch (error) {
      failures.push(`${sourceUrl} could not be verified: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, () => validateHostNormalization()));

for (const pathname of criticalIndexablePaths.filter((value) => value !== "/sitemap.xml")) {
  const response = await fetchWithRetry(`${siteUrl}${pathname}`, {
    redirect: "manual",
    headers: { "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)" },
  });
  if (response.status !== 200) {
    failures.push(`${pathname} returned ${response.status}; expected 200.`);
  }
  if (/noindex/i.test(response.headers.get("x-robots-tag") ?? "")) {
    failures.push(`${pathname} returns an X-Robots-Tag noindex directive.`);
  }
}

for (const retiredPath of retiredPaths) {
  const response = await fetchWithRetry(`${siteUrl}${retiredPath}`, {
    redirect: "manual",
    headers: { "user-agent": "AllAboutXRP-Redirect-Audit/1.0" },
  });
  if (response.status !== 410) {
    failures.push(`${retiredPath} returned ${response.status}; expected 410.`);
  }
  if (response.headers.get("location")) {
    failures.push(`${retiredPath} unexpectedly redirects to ${response.headers.get("location")}.`);
  }
}

const report = {
  siteUrl,
  redirectsChecked: redirects.length,
  hostNormalizationsChecked: normalizationChecks.length,
  criticalIndexablePathsChecked: criticalIndexablePaths.length,
  retiredPathsChecked: retiredPaths.length,
  redirectChains: failures.filter((failure) => failure.includes("another redirect")),
  failures,
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
