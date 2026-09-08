import { describe, expect, it } from "vitest";
import { welcomeSubject, receiptLines } from "./email.js";

describe("email copy", () => {
  it("names the plan in the welcome subject", () => {
    expect(welcomeSubject("Growth")).toBe("Welcome to Acme Growth");
  });

  it("renders receipt lines", () => {
    expect(receiptLines(1999, "Growth")).toEqual([
      "Plan: Growth",
      "Total due: $19.99",
    ]);
  });
});
