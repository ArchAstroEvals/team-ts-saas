export const SESSION_TTL_HOURS = 24;

export const ROLES = ["owner", "admin", "member"];

export function createSession(userId, role = "member", now = Date.now()) {
  if (!userId) throw new Error("userId required");
  if (!ROLES.includes(role)) throw new Error("unknown role " + role);
  return { userId, role, createdAt: now, expiresAt: now + SESSION_TTL_HOURS * 3600 * 1000 };
}

export function isSessionValid(session, now = Date.now()) {
  return !!session && !!session.userId && now < session.expiresAt;
}

export function canManageBilling(session) {
  return !!session && (session.role === "owner" || session.role === "admin");
}
