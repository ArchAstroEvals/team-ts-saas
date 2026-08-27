import SignupForm from "../../components/SignupForm.jsx";

export const metadata = { title: "Sign up — Acme SaaS" };

export default function Signup() {
  return (
    <div>
      <h1>Sign up</h1>
      <SignupForm />
    </div>
  );
}
