import { ROLES } from "./auth.js";

export function validInvite(email, role) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "bad email";
  if (!ROLES.includes(role)) return "bad role";
  return null;
}

export function seatsLeft(planSeats, members) {
  return planSeats - members;
}
