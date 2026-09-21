import { PLANS, yearlyPrice } from "../../lib/plans.js";
import { savingsPct, effectiveMonthly } from "../../lib/annual.js";
import PricingCard from "../../components/PricingCard.jsx";

export const metadata = { title: "Pricing — Acme SaaS" };

export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <p>Yearly plans save {savingsPct()}%.</p>
      {PLANS.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          yearly={yearlyPrice(plan.id)}
          eff={effectiveMonthly(plan.id)}
        />
      ))}
    </div>
  );
}
