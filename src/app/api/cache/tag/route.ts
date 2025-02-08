import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!token || !tag) {
    return Response.json({ error: "Token not provided" }, { status: 400 });
  }
  if (token !== process.env.CACHE_TOKEN) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }

  revalidateTag(tag);
  return Response.json({ success: "Cache revalidated" });
}
