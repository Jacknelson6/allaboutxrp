import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email required. Subscribe to access digests." },
      { status: 403 }
    );
  }

  const supabase = createServiceClient();

  // Validate subscriber
  const { data: subscriber } = await supabase
    .from("subscribers")
    .select("id, active")
    .eq("email", email.toLowerCase().trim())
    .single();

  if (!subscriber || !subscriber.active) {
    return NextResponse.json(
      { error: "Subscribe first to access digests.", subscribe: true },
      { status: 403 }
    );
  }

  // Fetch digest
  const { data: digest, error } = await supabase
    .from("digests")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !digest) {
    return NextResponse.json({ error: "Digest not found" }, { status: 404 });
  }

  return NextResponse.json(digest);
}
