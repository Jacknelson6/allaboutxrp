# Vercel React Best Practices

## Priority Rules

### 1. Eliminating Waterfalls (CRITICAL)
- Move await into branches where actually used
- Use Promise.all() for independent operations
- Use Suspense to stream content
- Start promises early, await late in API routes

### 2. Bundle Size (CRITICAL)
- Import directly, avoid barrel files
- Use next/dynamic for heavy components
- Load analytics/logging after hydration
- Preload on hover/focus for perceived speed

### 3. Server-Side Performance (HIGH)
- React.cache() for per-request dedup
- LRU cache for cross-request caching
- Minimize data passed to client components
- Parallelize fetches in component structure
- Use after() for non-blocking operations

### 4. Client-Side Data Fetching (MEDIUM-HIGH)
- Use SWR for automatic request dedup
- Deduplicate global event listeners

### 5. Re-render Optimization (MEDIUM)
- Don't subscribe to state only used in callbacks
- Extract expensive work into memoized components
- Use primitive dependencies in effects
- Subscribe to derived booleans, not raw values
- Use functional setState for stable callbacks
- Pass function to useState for expensive values
- Use startTransition for non-urgent updates

### 6. Rendering Performance (MEDIUM)
- Animate div wrapper, not SVG element
- Use content-visibility for long lists
- Extract static JSX outside components
- Reduce SVG coordinate precision
- Use inline script for client-only data
- Use ternary, not && for conditionals

### 7. JavaScript Performance (LOW-MEDIUM)
- Group CSS changes via classes or cssText
- Build Map for repeated lookups
- Cache object properties in loops
- Cache function results in module-level Map
- Cache localStorage/sessionStorage reads
- Combine multiple filter/map into one loop
- Check array length before expensive comparison
- Return early from functions
- Hoist RegExp creation outside loops
- Use Set/Map for O(1) lookups
- Use toSorted() for immutability

### 8. Advanced Patterns (LOW)
- Store event handlers in refs
- useLatest for stable callback refs
