import { meterPercent, quotaLeft } from "../../lib/usage.js";

const USED = 62;
const QUOTA = 100;

export const metadata = { title: "Dashboard — Acme SaaS" };

export default function Dashboard() {
  const pct = meterPercent(USED, QUOTA);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Usage: {USED}/{QUOTA} ({pct}%) · {quotaLeft(USED, QUOTA)} left
      </p>
    </div>
  );
}
