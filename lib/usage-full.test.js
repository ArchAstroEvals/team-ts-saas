import { describe, expect, it } from "vitest";
import { meterPercent } from "./usage.js";

describe("usage", () => {
  it("quota exactly full reads 100", () => {
    expect(meterPercent(100, 100)).toBe(100);
  });
});
