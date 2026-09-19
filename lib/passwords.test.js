import { describe, expect, it } from "vitest";
import { scorePassword, strongPassword } from "./passwords.js";

describe("passwords", () => {
  it("scores mixed long passwords high", () => {
    expect(scorePassword("Correct-Horse-9")).toBe(4);
    expect(strongPassword("Correct-Horse-9")).toBe(true);
  });

  it("rejects short simple passwords", () => {
    expect(strongPassword("abc")).toBe(false);
  });
});
