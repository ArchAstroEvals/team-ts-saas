"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (email.includes("@")) setDone(true);
  }

  if (done) return <p>Check your inbox to confirm {email}.</p>;
  return (
    <form onSubmit={submit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@team.co"
      />
      <button type="submit">Create account</button>
    </form>
  );
}
