const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504]);

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
