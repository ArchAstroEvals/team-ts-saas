import { describe, expect, it } from "vitest";
import { applyCoupon } from "./coupons.js";

describe("coupons", () => {
  it("applies percent and fixed coupons", () => {
    expect(applyCoupon(1000, { kind: "percent", value: 20 })).toBe(800);
    expect(applyCoupon(1000, { kind: "fixed", value: 150 })).toBe(850);
  });

  it("floors fixed coupons at zero", () => {
    expect(applyCoupon(100, { kind: "fixed", value: 500 })).toBe(0);
  });

  it("passes through missing coupons", () => {
    expect(applyCoupon(1000, null)).toBe(1000);
  });
});
