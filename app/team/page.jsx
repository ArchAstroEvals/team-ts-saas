import { seatsLeft } from "../../lib/teams.js";
import { getPlan } from "../../lib/plans.js";

export const metadata = { title: "Team — Acme SaaS" };

export default function Team() {
  const plan = getPlan("growth");
  return (
    <div>
      <h1>Team settings</h1>
      <p>
        Plan {plan.name} · {seatsLeft(plan.seats, 3)} seats open
      </p>
    </div>
  );
}
