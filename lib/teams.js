import { ROLES } from "./auth.js";

export const INVITE_TTL_HOURS = 72;

export function validInvite(email, role) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "bad email";
  if (!ROLES.includes(role)) return "bad role";
  return null;
}

export function seatsLeft(planSeats, members) {
  return Math.max(0, planSeats - members);
}

export function canInvite(inviterRole, targetRole) {
  if (inviterRole === "owner") return true;
  if (inviterRole === "admin") return targetRole !== "owner";
  return false;
}

export function inviteExpired(sentAt, now = Date.now()) {
  return now - sentAt > INVITE_TTL_HOURS * 3600 * 1000;
}
