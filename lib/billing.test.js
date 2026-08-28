import { describe, expect, it } from "vitest";
import { prorate, invoiceTotal } from "./billing.js";

describe("billing", () => {
  it("prorates a mid-cycle upgrade", () => {
    expect(prorate(3000, 15)).toBe(1500);
  });

  it("rejects out-of-range days", () => {
    expect(() => prorate(3000, 31)).toThrow("bad daysLeft");
  });

  it("totals invoice lines", () => {
    expect(invoiceTotal([{ qty: 2, unit: 500 }, { qty: 1, unit: 250 }])).toBe(1250);
  });
});
