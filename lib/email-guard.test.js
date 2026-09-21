import { describe, expect, it } from "vitest";
import { receiptLines } from "./email.js";

describe("receipt guards", () => {
  it("rejects negative totals", () => {
    expect(() => receiptLines(-1, "Growth")).toThrow("total");
  });
});
