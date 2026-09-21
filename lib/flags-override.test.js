import { describe, expect, it } from "vitest";
import { flagOn } from "./flags.js";

describe("flags", () => {
  it("kills a flag per environment", () => {
    expect(flagOn("annualToggle", { annualToggle: false })).toBe(false);
  });
});
