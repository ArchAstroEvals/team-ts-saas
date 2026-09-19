let seq = 0;

export function nextInvoiceNumber(prefix = "INV") {
  seq += 1;
  return prefix + "-" + String(seq).padStart(4, "0");
}

export function resetInvoiceSeq() {
  seq = 0;
}

export function dueDate(issuedAt, netDays = 30) {
  if (netDays < 0) throw new Error("netDays must be >= 0");
  return issuedAt + netDays * 24 * 3600 * 1000;
}
