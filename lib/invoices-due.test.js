import { describe, expect, it } from "vitest";
import { dueDate } from "./invoices.js";

describe("invoice due dates", () => {
  it("adds net days", () => {
    expect(dueDate(0, 30)).toBe(30 * 24 * 3600 * 1000);
  });

  it("rejects negative terms", () => {
    expect(() => dueDate(0, -1)).toThrow("netDays");
  });
});
