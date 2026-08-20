export const PLANS = [
  { id: "starter", name: "Starter", seats: 5, monthly: 19 },
  { id: "growth", name: "Growth", seats: 25, monthly: 79 },
  { id: "scale", name: "Scale", seats: 100, monthly: 249 },
];

export function getPlan(id) {
  return PLANS.find((p) => p.id === id) || null;
}

export function planPrice(id, months = 1) {
  const plan = getPlan(id);
  if (!plan) throw new Error("unknown plan " + id);
  if (months < 1) throw new Error("months must be >= 1");
  return plan.monthly * months;
}
