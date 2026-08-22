import { describe, expect, it } from "vitest";
import { yearlyPrice, formatUSD } from "./plans.js";

describe("yearly pricing", () => {
  it("applies the yearly discount", () => {
    expect(yearlyPrice("starter")).toBe(Math.round(19 * 12 * 0.8));
  });

  it("formats cents as USD", () => {
    expect(formatUSD(1999)).toBe("$19.99");
  });
});
