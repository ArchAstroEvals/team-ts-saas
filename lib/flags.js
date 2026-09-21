export const FLAGS = {
  annualToggle: true,
  seatWarnings: true,
  newCheckout: false,
};

export function flagOn(name, overrides = {}) {
  if (name in overrides) return !!overrides[name];
  return !!FLAGS[name];
}
