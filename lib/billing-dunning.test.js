import { describe, expect, it } from "vitest";
import { dunningStatus } from "./billing.js";

describe("billing", () => {
  it("negative counts stay current", () => {
    expect(dunningStatus(-2)).toBe("current");
  });
});
