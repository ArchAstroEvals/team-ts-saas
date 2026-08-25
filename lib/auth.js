export const SESSION_TTL_HOURS = 24;

export function createSession(userId, now = Date.now()) {
  if (!userId) throw new Error("userId required");
  return { userId, createdAt: now, expiresAt: now + SESSION_TTL_HOURS * 3600 * 1000 };
}

export function isSessionValid(session, now = Date.now()) {
  return !!session && !!session.userId && now < session.expiresAt;
}
