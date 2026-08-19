export const PLANS = [
  { id: "starter", name: "Starter", seats: 5 },
  { id: "growth", name: "Growth", seats: 25 },
  { id: "scale", name: "Scale", seats: 100 },
];

export function getPlan(id) {
  return PLANS.find((p) => p.id === id) || null;
}
