import { describe, expect, it } from "vitest";
import { signPayload, verifySignature } from "./webhooks.js";

describe("webhooks", () => {
  it("verifies its own signatures", () => {
    const sig = signPayload("s3cret", "hello");
    expect(verifySignature("s3cret", "hello", sig)).toBe(true);
  });

  it("rejects forged bodies", () => {
    const sig = signPayload("s3cret", "hello");
    expect(verifySignature("s3cret", "bye", sig)).toBe(false);
    expect(verifySignature("s3cret", "hello", null)).toBe(false);
  });
});
