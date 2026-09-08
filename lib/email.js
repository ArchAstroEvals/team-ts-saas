export function welcomeSubject(planName) {
  return "Welcome to Acme " + planName;
}

export function receiptLines(total, planName) {
  return ["Plan: " + planName, "Total due: $" + (total / 100).toFixed(2)];
}
