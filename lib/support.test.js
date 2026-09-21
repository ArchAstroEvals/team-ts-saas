import { describe, expect, it } from "vitest";
import { supportTier, slaHours } from "./support.js";

describe("support tiers", () => {
  it("maps plans to channels", () => {
    expect(supportTier("scale")).toBe("slack");
    expect(supportTier("growth")).toBe("email-priority");
    expect(supportTier("starter")).toBe("community");
    expect(supportTier("nope")).toBe("community");
  });

  it("sets SLAs per tier", () => {
    expect(slaHours("slack")).toBe(4);
    expect(slaHours("community")).toBe(72);
  });
});
