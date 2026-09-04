import { describe, expect, it } from "vitest";
import { meterPercent, quotaLeft } from "./usage.js";

describe("usage meters", () => {
  it("caps the meter at 100", () => {
    expect(meterPercent(30, 100)).toBe(30);
    expect(meterPercent(150, 100)).toBe(100);
  });

  it("floors remaining quota at zero", () => {
    expect(quotaLeft(120, 100)).toBe(0);
  });
});
