import { describe, expect, it } from "vitest";
import { PLANS, getPlan } from "./plans.js";

describe("plans", () => {
  it("lists three tiers", () => {
    expect(PLANS.map((p) => p.id)).toEqual(["starter", "growth", "scale"]);
  });

  it("finds a plan by id", () => {
    expect(getPlan("growth").seats).toBe(25);
  });

  it("returns null for unknown plans", () => {
    expect(getPlan("nope")).toBeNull();
  });
});
