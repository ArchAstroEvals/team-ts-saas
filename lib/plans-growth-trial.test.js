import { describe, expect, it } from "vitest";
import { trialEnds } from "./plans.js";

describe("plans", () => {
  it("growth shares the 14-day trial", () => {
    expect(trialEnds(0, "growth")).toBe(14 * 24 * 3600 * 1000);
  });
});
