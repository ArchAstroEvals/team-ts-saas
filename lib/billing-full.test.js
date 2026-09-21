import { describe, expect, it } from "vitest";
import { prorate } from "./billing.js";

describe("billing", () => {
  it("whole period equals monthly", () => {
    expect(prorate(3000, 30)).toBe(3000);
  });
});
