let seq = 0;

export function nextInvoiceNumber(prefix = "INV") {
  seq += 1;
  return prefix + "-" + String(seq).padStart(4, "0");
}

export function resetInvoiceSeq() {
  seq = 0;
}
