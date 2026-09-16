import { describe, expect, it } from "vitest";
import { monthlyToAnnual, savingsPct } from "./annual.js";

describe("annual billing", () => {
  it("discounts twelve months", () => {
    expect(monthlyToAnnual(100)).toBe(960);
  });

  it("reports savings as a percent", () => {
    expect(savingsPct()).toBe(20);
  });
});
