import { PLANS } from "../lib/plans.js";

export default function Home() {
  return (
    <div>
      <h1>Acme SaaS</h1>
      <p>Team subscriptions with per-seat billing.</p>
      <ul>
        {PLANS.map((p) => (
          <li key={p.id}>
            {p.name}: ${p.monthly}/mo
          </li>
        ))}
      </ul>
    </div>
  );
}
