import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createSessionValue, credentialsConfigured, verifyCredentials } from "@/lib/pricelist/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function POST(req: Request) {
  if (!credentialsConfigured()) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }
  if (!body.email || !body.password || body.password.length > 200) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!verifyCredentials(body.email, body.password)) {
    await sleep(800); // slows down guessing without needing any shared state
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }
  const { value, maxAge } = createSessionValue();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, value, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge });
  return res;
}
