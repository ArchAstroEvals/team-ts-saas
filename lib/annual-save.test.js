import { describe, expect, it } from "vitest";
import { yearlySavings } from "./annual.js";

describe("yearly savings", () => {
  it("beats twelve monthly payments", () => {
    expect(yearlySavings("growth")).toBe(79 * 12 - Math.round(79 * 12 * 0.8));
  });
});
