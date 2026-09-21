export function meterPercent(used, quota) {
  if (quota <= 0) throw new Error("quota must be > 0");
  if (used < 0) return 0;
  return Math.min(100, Math.round((used / quota) * 100));
}

export function quotaLeft(used, quota) {
  return Math.max(0, quota - used);
}
