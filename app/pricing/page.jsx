import { PLANS, yearlyPrice } from "../../lib/plans.js";
import PricingCard from "../../components/PricingCard.jsx";

export const metadata = { title: "Pricing — Acme SaaS" };

export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} yearly={yearlyPrice(plan.id)} />
      ))}
    </div>
  );
}
