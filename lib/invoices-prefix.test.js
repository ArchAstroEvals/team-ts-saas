import { describe, expect, it } from "vitest";
import { nextInvoiceNumber, resetInvoiceSeq } from "./invoices.js";

describe("invoice prefixes", () => {
  it("prefixes the sequence", () => {
    resetInvoiceSeq();
    expect(nextInvoiceNumber("PO")).toBe("PO-0001");
  });
});
