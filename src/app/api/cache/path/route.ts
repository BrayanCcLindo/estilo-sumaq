import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;

  if (!token || !path) {
    return Response.json({ error: "Token not provided" }, { status: 400 });
  }
  if (token !== process.env.CACHE_TOKEN) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }

  revalidatePath(path);
  return Response.json({ success: "Path revalidated" });
}
