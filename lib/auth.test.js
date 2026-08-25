import { describe, expect, it } from "vitest";
import { createSession, isSessionValid } from "./auth.js";

describe("auth sessions", () => {
  it("creates a 24h session", () => {
    const s = createSession("u1", 1000);
    expect(s.expiresAt).toBe(1000 + 24 * 3600 * 1000);
  });

  it("rejects blank users", () => {
    expect(() => createSession("")).toThrow("userId required");
  });

  it("expires old sessions", () => {
    const s = createSession("u1", 0);
    expect(isSessionValid(s, 25 * 3600 * 1000)).toBe(false);
    expect(isSessionValid(s, 1000)).toBe(true);
  });
});
