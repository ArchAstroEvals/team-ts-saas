import { createHmac, timingSafeEqual } from "node:crypto";

export function signPayload(secret, body) {
  return createHmac("sha256", secret).update(body).digest("hex");
}

export function verifySignature(secret, body, signature) {
  const expected = signPayload(secret, body);
  const a = Buffer.from(expected);
  const b = Buffer.from(signature || "");
  return a.length === b.length && timingSafeEqual(a, b);
}
