import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";

/* ---------------------------------------------------------------------------
   admin-kit · single-owner login, no database. Credentials live ONLY as env vars
   (salted scrypt hash — never the password), the session is a signed cookie.
   Set them with scripts/set-admin-password.mjs (the password never touches chat/files).
   --------------------------------------------------------------------------- */

export const ADMIN_COOKIE = "admin_session";
const TTL_MS = 1000 * 60 * 60 * 12;

const env = (n: string) => process.env[n] ?? "";

export const credentialsConfigured = () =>
  Boolean(env("ADMIN_EMAIL") && env("ADMIN_PASSWORD_SALT") && env("ADMIN_PASSWORD_HASH") && env("ADMIN_SESSION_SECRET"));

const safeEq = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

export function verifyCredentials(email: string, password: string): boolean {
  if (!credentialsConfigured()) return false;
  const emailOk = safeEq(email.trim().toLowerCase(), env("ADMIN_EMAIL").trim().toLowerCase());
  const got = scryptSync(password, env("ADMIN_PASSWORD_SALT"), 64);
  const want = Buffer.from(env("ADMIN_PASSWORD_HASH"), "hex");
  const passOk = got.length === want.length && timingSafeEqual(got, want);
  return emailOk && passOk;
}

const sign = (v: string) => createHmac("sha256", env("ADMIN_SESSION_SECRET")).update(v).digest("hex");

export function createSessionValue(): { value: string; maxAge: number } {
  const payload = String(Date.now() + TTL_MS);
  return { value: `${payload}.${sign(payload)}`, maxAge: Math.floor(TTL_MS / 1000) };
}

export function isValidSession(cookie: string | undefined): boolean {
  if (!cookie || !credentialsConfigured()) return false;
  const [payload, sig] = cookie.split(".");
  if (!payload || !sig || !safeEq(sig, sign(payload))) return false;
  const exp = Number(payload);
  return Number.isFinite(exp) && Date.now() < exp;
}
