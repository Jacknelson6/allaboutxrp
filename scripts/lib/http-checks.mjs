const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504]);

export const AUDIT_REQUEST_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
  "x-aaxrp-audit": "production-seo-validation",
};

export function selectDeterministicSample(values, { limit, priority = [] }) {
  const uniqueValues = [...new Set(values)];
  const cappedLimit = Math.max(0, Math.min(Math.floor(limit), uniqueValues.length));
  if (cappedLimit === 0) return [];
  if (cappedLimit === uniqueValues.length) return uniqueValues;

  const valueSet = new Set(uniqueValues);
  const selected = [];
  const selectedSet = new Set();
  const add = (value) => {
    if (!valueSet.has(value) || selectedSet.has(value) || selected.length >= cappedLimit) return;
    selected.push(value);
    selectedSet.add(value);
  };

  priority.forEach(add);

  const candidates = uniqueValues.filter((value) => !selectedSet.has(value));
  const remaining = cappedLimit - selected.length;
  for (let index = 0; index < remaining; index += 1) {
    const candidateIndex = remaining === 1
      ? 0
      : Math.round((index * (candidates.length - 1)) / (remaining - 1));
    add(candidates[candidateIndex]);
  }

  return selected;
}

export async function fetchWithRetry(
  url,
  options,
  {
    attempts = 4,
    fetchImpl = fetch,
    sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
  } = {},
) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        ...options,
        signal: options?.signal ?? AbortSignal.timeout(15000),
      });
      if (!RETRYABLE_STATUSES.has(response.status) || attempt === attempts) return response;
    } catch (error) {
      lastError = error;
      if (attempt === attempts) throw error;
    }

    await sleep(attempt * 1000);
  }

  throw lastError;
}

export async function checkHostNormalization({ sourceUrl, expectedUrl, fetchUrl }) {
  const failures = [];
  let currentUrl = sourceUrl;
  const visited = new Set([sourceUrl]);

  for (let hop = 0; hop <= 2; hop += 1) {
    const response = await fetchUrl(currentUrl);

    if (response.status === 200) {
      if (hop === 0) failures.push(`${sourceUrl} did not redirect to the canonical origin.`);
      if (currentUrl !== expectedUrl) {
        failures.push(`${sourceUrl} resolved to ${currentUrl}; expected ${expectedUrl}.`);
      }
      if (/noindex/i.test(response.headers.get("x-robots-tag") ?? "")) {
        failures.push(`${sourceUrl} canonical destination is noindex.`);
      }
      return failures;
    }

    if (![301, 308].includes(response.status)) {
      failures.push(`${currentUrl} returned ${response.status}; expected a permanent redirect.`);
      return failures;
    }

    const location = response.headers.get("location");
    if (!location) {
      failures.push(`${currentUrl} returned ${response.status} without a location header.`);
      return failures;
    }

    const destination = new URL(location, currentUrl).href;
    if (visited.has(destination)) {
      failures.push(`${sourceUrl} enters a redirect loop at ${destination}.`);
      return failures;
    }
    if (hop === 2) {
      failures.push(`${sourceUrl} requires more than two redirects to reach ${expectedUrl}.`);
      return failures;
    }

    visited.add(destination);
    currentUrl = destination;
  }

  return failures;
}
