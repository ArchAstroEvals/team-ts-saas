export function supportTier(planId) {
  if (planId === "scale") return "slack";
  if (planId === "growth") return "email-priority";
  return "community";
}

export function slaHours(tier) {
  if (tier === "slack") return 4;
  if (tier === "email-priority") return 24;
  return 72;
}
