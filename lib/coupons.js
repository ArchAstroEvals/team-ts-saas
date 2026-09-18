export function applyCoupon(total, coupon) {
  if (!coupon) return total;
  if (coupon.kind === "percent") {
    if (coupon.value < 0 || coupon.value > 100) throw new Error("bad percent");
    return Math.round(total * (1 - coupon.value / 100));
  }
  if (coupon.kind === "fixed") {
    if (coupon.value < 0) throw new Error("bad fixed");
    return Math.max(0, total - coupon.value);
  }
  throw new Error("unknown coupon " + coupon.kind);
}

export function stackCoupons(total, coupons) {
  const percents = coupons.filter((c) => c && c.kind === "percent");
  if (percents.length > 1) throw new Error("one percent coupon max");
  return coupons.reduce((sum, c) => applyCoupon(sum, c), total);
}
