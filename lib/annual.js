import { getPlan, yearlyPrice, YEARLY_DISCOUNT } from "./plans.js";

export function monthlyToAnnual(monthly) {
  return Math.round(monthly * 12 * (1 - YEARLY_DISCOUNT));
}

export function savingsPct() {
  return Math.round(YEARLY_DISCOUNT * 100);
}

export function yearlySavings(id) {
  const plan = getPlan(id);
  if (!plan) throw new Error("unknown plan " + id);
  return plan.monthly * 12 - yearlyPrice(id);
}
