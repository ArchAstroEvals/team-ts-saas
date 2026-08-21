import { describe, expect, it } from "vitest";
import { planPrice } from "./plans.js";

describe("planPrice", () => {
  it("multiplies monthly by months", () => {
    expect(planPrice("starter", 3)).toBe(57);
  });

  it("rejects unknown plans", () => {
    expect(() => planPrice("nope")).toThrow("unknown plan");
  });

  it("rejects zero months", () => {
    expect(() => planPrice("growth", 0)).toThrow("months");
  });
});
