# AllAboutXRP Editorial Image System

Every original news and flagship guide image uses `aaxrp-classical-ascii-v2`.

## Visual signature

- Ancient Greek architecture, landscape, objects, or material culture are used as subject-specific metaphors, not as generic decoration.
- Warm ivory negative space, cobalt and ultramarine water or shadow, pale gold light, and restrained vermilion or emerald accents form the core palette.
- The finish is a luminous academic oil painting with crisp sculptural form, rich glazing, and ordered detail.
- Fine translucent fields made from `1`, `0`, and `x` form selected contours in sky, water, distance, or shadow.
- ASCII is integrated into the scene. It is never a coarse full-image filter, retro pixel art, or illegible decoration over a face.
- Images use a cinematic 16:9 ratio, no embedded border, no rounded frame, no title text, no watermark, and no logo.

## Story-first art direction

The metaphor must explain the story at thumbnail size:

- Regulation: assembly, civic chamber, tablets, gates, or branching legal paths.
- Ledger and technology: archive, mechanism, workshop, channels, validators, or a protected record.
- Buying and custody: a deliberate path, checkpoints, treasury, keys, or a secure transfer.
- Markets and outlooks: observatory, navigation, multiple routes, measurement, or uncertain horizons.
- Risk and investment: balanced scales, distinct weights, forks, evidence, or competing opportunity costs.
- Comparisons: different vessels, bridges, instruments, or routes shown without declaring a visual winner.

Do not reuse the same temple, coast, harbor, terrace, bank, or composition for another subject. The visual language stays consistent while the setting, viewpoint, light, primary symbol, and metaphor all change.

## Scene-diversity contract

Before generating anything, inspect every `sceneKey` and `imageSceneKey` already present in `content/editorial-art.json` and `content/news`.

Every new image must introduce all five of the following:

1. A setting that does not duplicate an existing setting.
2. A new primary object or symbol.
3. A different camera position or compositional structure.
4. A different lighting condition or time of day.
5. A metaphor that explains the exact topic without relying on generic Greek scenery.

Palette, paint handling, and ASCII contours create continuity. Repeated scenery does not.

## Production prompt

Use the homepage hero at `public/images/xrp-ascii-bank-hero.webp` as the first style reference. Use the Sublime Classical Oil assets only for palette, light, surface, and finish.

```text
Asset type: finished AllAboutXRP editorial illustration, cinematic 16:9 landscape.
Primary request: [describe the exact story-specific scene and visual metaphor]. State why the setting is different from every registered scene.
Style: luminous academic classical-revival oil painting, crisp sculptural modeling, rich glazing, saturated cobalt and ultramarine, warm ivory, pale gold, restrained vermilion and emerald, extraordinary atmospheric clarity.
ASCII treatment: fine translucent fields made only from 1, 0, and x form selected contours in sky, water, distance, and shadow, then dissolve into white space. Never apply a coarse all-over filter.
Composition: one clear focal idea, a viewpoint not used by another registered scene, strong thumbnail silhouette, ordered depth, generous negative space, no border, sharp corners.
Constraints: preserve exact subject and count; no readable text, logo, coin, watermark, rounded frame, cyberpunk neon, photographic realism, sepia, muddy gray, coarse halftone, or retro pixel art.
```

## Publishing contract

1. Generate a unique image for the exact story.
2. Export WebP at 1672 by 941 pixels when possible.
3. Save news art under `public/news/` and guide art under `public/guides/`.
4. Add factual alt text that describes the visible scene without saying “image of.”
5. News JSON must include `imageStyle`, `imagePrompt`, image dimensions, and the final path.
6. Flagship guide images must be registered in `content/editorial-art.json`.
7. Register a unique scene key, setting, and primary metaphor before generating.
8. Run `npm run art:validate` and `npm run news:validate` before publishing.
