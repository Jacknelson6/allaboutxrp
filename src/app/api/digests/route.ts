import { NextResponse } from "next/server";
import { getPublishedDigestEntries } from "@/lib/seo/published-content";

export const dynamic = "force-dynamic";

export async function GET() {
  // This route is itself the safe public fallback used during static builds,
  // so disable another public fallback here to avoid recursive self-fetches.
  const digests = await getPublishedDigestEntries(false);
  return NextResponse.json(
    digests.map((digest) => ({
      id: digest.id,
      title: digest.title,
      slug: digest.slug,
      week_start: digest.weekStart,
      week_end: digest.weekEnd,
      published_at: digest.publishedAt,
    })),
  );
}
