import { describe, expect, it } from "vitest";
import { auditEntry } from "./audit.js";

describe("audit log", () => {
  it("records action, actor, and target", () => {
    const e = auditEntry("invite.sent", "u1", "team-9");
    expect(e.action).toBe("invite.sent");
    expect(e.target).toBe("team-9");
  });

  it("requires action and actor", () => {
    expect(() => auditEntry("", "u1")).toThrow("action required");
    expect(() => auditEntry("x", "")).toThrow("actor required");
  });
});
