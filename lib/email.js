export function welcomeSubject(planName) {
  return "Welcome to Acme " + planName;
}

export function receiptLines(total, planName) {
  if (total < 0) throw new Error("total must be >= 0");
  return ["Plan: " + planName, "Total due: $" + (total / 100).toFixed(2)];
}
