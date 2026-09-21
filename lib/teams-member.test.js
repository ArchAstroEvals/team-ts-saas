import { describe, expect, it } from "vitest";
import { canInvite } from "./teams.js";

describe("teams", () => {
  it("members cannot invite anyone", () => {
    expect(canInvite("member", "admin")).toBe(false);
  });
});
