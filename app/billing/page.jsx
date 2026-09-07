import { invoiceTotal, dunningStatus } from "../../lib/billing.js";
import { applyCoupon } from "../../lib/coupons.js";

const LINES = [
  { qty: 25, unit: 316 },
  { qty: 1, unit: 0 },
];

export const metadata = { title: "Billing — Acme SaaS" };

export default function Billing() {
  const subtotal = invoiceTotal(LINES);
  const total = applyCoupon(subtotal, { kind: "percent", value: 20 });
  return (
    <div>
      <h1>Billing</h1>
      <p>
        Due ${(total / 100).toFixed(2)} · status {dunningStatus(0)}
      </p>
    </div>
  );
}
