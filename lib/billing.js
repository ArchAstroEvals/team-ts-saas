export function prorate(monthly, daysLeft, daysInMonth = 30) {
  if (monthly < 0) throw new Error("monthly must be >= 0");
  if (daysLeft < 0 || daysLeft > daysInMonth) throw new Error("bad daysLeft");
  return Math.round((monthly * daysLeft) / daysInMonth);
}

export function invoiceTotal(lines) {
  return lines.reduce((sum, line) => sum + line.qty * line.unit, 0);
}

export function overage(seatsUsed, seatsIncluded, perSeat) {
  if (seatsUsed <= seatsIncluded) return 0;
  return (seatsUsed - seatsIncluded) * perSeat;
}

export function dunningStatus(failedPayments) {
  if (failedPayments <= 0) return "current";
  if (failedPayments === 1) return "retrying";
  return "past_due";
}
