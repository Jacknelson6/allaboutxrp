import artManifest from "../../content/editorial-art.json";

export const EDITORIAL_ART_STYLE = artManifest.styleVersion;

export interface GuideArtworkRecord {
  route: string;
  breadcrumbLabel: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sceneKey: string;
  setting: string;
  primarySymbol: string;
  promptConcept: string;
}

const guideArtwork = artManifest.guides as GuideArtworkRecord[];

export function getGuideArtworkByLabel(label: string): GuideArtworkRecord | null {
  return guideArtwork.find((artwork) => artwork.breadcrumbLabel === label) ?? null;
}

export function getGuideArtworkByRoute(route: string): GuideArtworkRecord | null {
  return guideArtwork.find((artwork) => artwork.route === route) ?? null;
}
