import { meterPercent, quotaLeft } from "../../lib/usage.js";
import UsageBar from "../../components/UsageBar.jsx";

const USED = 62;
const QUOTA = 100;

export const metadata = { title: "Dashboard — Acme SaaS" };

export default function Dashboard() {
  const pct = meterPercent(USED, QUOTA);
  return (
    <div>
      <h1>Dashboard</h1>
      <UsageBar percent={pct} />
      <p>
        {quotaLeft(USED, QUOTA)} seats left
      </p>
    </div>
  );
}
