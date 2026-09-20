export function auditEntry(action, actorId, target) {
  if (!action) throw new Error("action required");
  if (!actorId) throw new Error("actor required");
  return { action, actorId, target: target || null, at: Date.now() };
}
