/**
 * Admin auth — env-var password with HMAC-signed cookie.
 *
 * Single admin, no DB users table. The password lives in ADMIN_PASSWORD env
 * var. On login, the server signs a cookie with ADMIN_SECRET; middleware
 * verifies the signature on every /admin/* request.
 *
 * Uses Web Crypto so it works in both Node (API routes) and Edge (middleware)
 * runtimes.
 */

const TOKEN_VERSION = "v1";
const SESSION_DURATION_DAYS = 30;

export const SESSION_COOKIE_NAME = "portfolio_admin_session";

function getSecret(): string {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SECRET env var is required. Generate one with: openssl rand -hex 32",
    );
  }
  return secret;
}

function getAdminPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD;
}

async function hmac(value: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(value));
  return base64url(new Uint8Array(sig));
}

function base64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Generates a signed session token good for SESSION_DURATION_DAYS. */
export async function createSessionToken(): Promise<string> {
  const expiresAt = Date.now() + SESSION_DURATION_DAYS * 86400 * 1000;
  const payload = `${TOKEN_VERSION}.${expiresAt}`;
  const sig = await hmac(payload, getSecret());
  return `${payload}.${sig}`;
}

/** Returns true if the token is well-formed, signed correctly, and unexpired. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [version, expiresAtRaw, providedSig] = parts;
  if (version !== TOKEN_VERSION) return false;
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  try {
    const expectedSig = await hmac(`${version}.${expiresAtRaw}`, getSecret());
    return constantTimeEquals(providedSig, expectedSig);
  } catch {
    return false;
  }
}

function constantTimeEquals(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Constant-time password comparison used at the login endpoint. */
export function passwordMatches(provided: string): boolean {
  const expected = getAdminPassword();
  if (!expected) return false;
  if (provided.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < provided.length; i++) {
    diff |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_DURATION_DAYS * 86400,
};
