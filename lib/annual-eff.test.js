import { describe, expect, it } from "vitest";
import { effectiveMonthly } from "./annual.js";

describe("effective monthly", () => {
  it("rounds the yearly average", () => {
    expect(effectiveMonthly("growth")).toBe(Math.round(760 / 12));
  });
});
