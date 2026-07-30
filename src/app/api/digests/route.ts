import { NextResponse } from "next/server";
import { getPublishedDigestEntries } from "@/lib/seo/published-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const digests = await getPublishedDigestEntries();
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
