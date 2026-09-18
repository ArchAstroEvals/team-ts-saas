import { describe, expect, it } from "vitest";
import { stackCoupons } from "./coupons.js";

describe("coupon stacking", () => {
  it("stacks one percent with fixed coupons", () => {
    expect(
      stackCoupons(1000, [
        { kind: "percent", value: 10 },
        { kind: "fixed", value: 100 },
      ])
    ).toBe(800);
  });

  it("rejects two percent coupons", () => {
    expect(() =>
      stackCoupons(1000, [
        { kind: "percent", value: 10 },
        { kind: "percent", value: 5 },
      ])
    ).toThrow("one percent");
  });
});
