import { describe, expect, it } from "vitest";
import { GET } from "./route.js";

describe("health route", () => {
  it("reports ok", async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });
});
