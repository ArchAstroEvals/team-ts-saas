import { describe, expect, it } from "vitest";
import { slaHours } from "./support.js";

describe("support", () => {
  it("priority support is a day", () => {
    expect(slaHours("email-priority")).toBe(24);
  });
});
