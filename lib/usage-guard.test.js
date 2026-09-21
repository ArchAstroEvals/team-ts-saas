import { describe, expect, it } from "vitest";
import { meterPercent } from "./usage.js";

describe("meter guards", () => {
  it("treats negative usage as zero", () => {
    expect(meterPercent(-5, 100)).toBe(0);
  });
});
