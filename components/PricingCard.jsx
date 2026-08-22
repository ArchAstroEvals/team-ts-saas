export default function PricingCard({ plan, yearly }) {
  return (
    <div className="card">
      <h2>{plan.name}</h2>
      <p>
        ${plan.monthly}/mo or ${yearly}/yr · {plan.seats} seats
      </p>
    </div>
  );
}
