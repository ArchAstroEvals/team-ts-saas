import { describe, expect, it } from "vitest";
import { validInvite, seatsLeft } from "./teams.js";

describe("teams", () => {
  it("accepts a clean invite", () => {
    expect(validInvite("a@b.co", "member")).toBeNull();
  });

  it("rejects bad email and role", () => {
    expect(validInvite("nope", "member")).toBe("bad email");
    expect(validInvite("a@b.co", "root")).toBe("bad role");
  });

  it("counts open seats", () => {
    expect(seatsLeft(5, 3)).toBe(2);
  });
});
