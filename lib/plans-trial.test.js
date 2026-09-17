import { describe, expect, it } from "vitest";
import { trialEnds } from "./plans.js";

describe("trials", () => {
  it("ends starter trials after 14 days", () => {
    expect(trialEnds(0, "starter")).toBe(14 * 24 * 3600 * 1000);
  });

  it("gives scale a 30-day trial", () => {
    expect(trialEnds(0, "scale")).toBe(30 * 24 * 3600 * 1000);
  });
});
