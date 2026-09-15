import { getPlan, YEARLY_DISCOUNT } from "./plans.js";

export function monthlyToAnnual(monthly) {
  return Math.round(monthly * 12 * (1 - YEARLY_DISCOUNT));
}

export function savingsPct() {
  return Math.round(YEARLY_DISCOUNT * 100);
}
