import { describe, expect, it } from "vitest";
import { seatsLeft } from "./teams.js";

describe("seat clamping", () => {
  it("floors overbooked teams at zero", () => {
    expect(seatsLeft(5, 9)).toBe(0);
  });
});
