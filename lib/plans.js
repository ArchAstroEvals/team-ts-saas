export const PLANS = [
  { id: "starter", name: "Starter", seats: 5, monthly: 19, trialDays: 14 },
  { id: "growth", name: "Growth", seats: 25, monthly: 79, trialDays: 14 },
  { id: "scale", name: "Scale", seats: 100, monthly: 249, trialDays: 30 },
];

export const YEARLY_DISCOUNT = 0.2;

export function getPlan(id) {
  return PLANS.find((p) => p.id === id) || null;
}

export function planPrice(id, months = 1) {
  const plan = getPlan(id);
  if (!plan) throw new Error("unknown plan " + id);
  if (months < 1) throw new Error("months must be >= 1");
  return plan.monthly * months;
}

export function yearlyPrice(id) {
  const plan = getPlan(id);
  if (!plan) throw new Error("unknown plan " + id);
  return Math.round(plan.monthly * 12 * (1 - YEARLY_DISCOUNT));
}

export function formatUSD(cents) {
  return "$" + (cents / 100).toFixed(2);
}

export function trialEnds(startedAt, planId) {
  const plan = getPlan(planId);
  if (!plan) throw new Error("unknown plan " + planId);
  return startedAt + plan.trialDays * 24 * 3600 * 1000;
}
