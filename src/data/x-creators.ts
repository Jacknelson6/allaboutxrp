export interface XCreator {
  username: string;
  label?: string;
  priority?: number;
}

/**
 * List of X/Twitter creators to pull into the feed.
 * Jack will populate this list — add usernames without the @ symbol.
 */
export const xCreators: XCreator[] = [
  // Example:
  // { username: "Ripple", label: "Ripple Official", priority: 1 },
];
