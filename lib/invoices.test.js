import { describe, expect, it } from "vitest";
import { nextInvoiceNumber, resetInvoiceSeq } from "./invoices.js";

describe("invoice numbers", () => {
  it("pads the sequence", () => {
    resetInvoiceSeq();
    expect(nextInvoiceNumber()).toBe("INV-0001");
    expect(nextInvoiceNumber()).toBe("INV-0002");
  });
});
