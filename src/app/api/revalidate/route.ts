import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const documentType = body?._type as string | undefined;

  // Revalidate based on document type
  const tagMap: Record<string, string[]> = {
    program: ["programs"],
    event: ["events"],
    post: ["posts"],
    galleryItem: ["gallery"],
    globalSettings: ["settings"],
    teamMember: ["team"],
    partner: ["partners"],
    testimonial: ["testimonials"],
  };

  const tags = documentType ? (tagMap[documentType] ?? []) : [];

  for (const tag of tags) {
    revalidateTag(tag);
  }

  // Always revalidate shared paths
  revalidatePath("/", "layout");

  return NextResponse.json({
    revalidated: true,
    tags,
    documentType,
    now: Date.now(),
  });
}
