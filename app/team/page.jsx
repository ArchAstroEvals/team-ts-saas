import { seatsLeft } from "../../lib/teams.js";
import { getPlan } from "../../lib/plans.js";
import SeatWarning from "../../components/SeatWarning.jsx";

const MEMBERS = 27;

export const metadata = { title: "Team — Acme SaaS" };

export default function Team() {
  const plan = getPlan("growth");
  return (
    <div>
      <h1>Team settings</h1>
      <p>
        Plan {plan.name} · {seatsLeft(plan.seats, 3)} seats open
      </p>
      <SeatWarning used={MEMBERS} included={plan.seats} />
    </div>
  );
}
