import { describe, expect, it } from "vitest";
import { overage, dunningStatus } from "./billing.js";

describe("overage and dunning", () => {
  it("charges only seats above quota", () => {
    expect(overage(30, 25, 400)).toBe(2000);
    expect(overage(25, 25, 400)).toBe(0);
  });

  it("escalates failed payments", () => {
    expect(dunningStatus(0)).toBe("current");
    expect(dunningStatus(1)).toBe("retrying");
    expect(dunningStatus(3)).toBe("past_due");
  });
});
