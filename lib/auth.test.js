import { describe, expect, it } from "vitest";
import { createSession, isSessionValid, canManageBilling } from "./auth.js";

describe("auth sessions", () => {
  it("creates a 24h session", () => {
    const s = createSession("u1", "member", 1000);
    expect(s.expiresAt).toBe(1000 + 24 * 3600 * 1000);
  });

  it("rejects blank users", () => {
    expect(() => createSession("", "member")).toThrow("userId required");
  });

  it("expires old sessions", () => {
    const s = createSession("u1", "member", 0);
    expect(isSessionValid(s, 25 * 3600 * 1000)).toBe(false);
    expect(isSessionValid(s, 1000)).toBe(true);
  });
});

describe("auth roles", () => {
  it("rejects unknown roles", () => {
    expect(() => createSession("u1", "root")).toThrow("unknown role");
  });

  it("limits billing to owners and admins", () => {
    expect(canManageBilling(createSession("u1", "owner"))).toBe(true);
    expect(canManageBilling(createSession("u1", "admin"))).toBe(true);
    expect(canManageBilling(createSession("u1", "member"))).toBe(false);
    expect(canManageBilling(null)).toBe(false);
  });
});
