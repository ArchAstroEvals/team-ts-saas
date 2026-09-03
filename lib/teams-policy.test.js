import { describe, expect, it } from "vitest";
import { canInvite, inviteExpired } from "./teams.js";

describe("invite policy", () => {
  it("owners invite anyone, admins never owners", () => {
    expect(canInvite("owner", "owner")).toBe(true);
    expect(canInvite("admin", "owner")).toBe(false);
    expect(canInvite("admin", "member")).toBe(true);
    expect(canInvite("member", "member")).toBe(false);
  });

  it("invites expire after 72h", () => {
    expect(inviteExpired(0, 73 * 3600 * 1000)).toBe(true);
    expect(inviteExpired(0, 1000)).toBe(false);
  });
});
