"use client";

import { useState } from "react";

type EmailSignupProps = {
  readonly compact?: boolean;
};

export default function EmailSignup({ compact = false }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.convertkit.com/v3/forms/9222742/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: "rghu7Ah3Kdn597mUlyfqew",
          email: email.trim(),
        }),
      });

      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm font-sans text-brass font-medium">
        You&apos;re on the list. New finds incoming.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 sm:flex-row ${compact ? "w-full" : ""}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full sm:w-72 border border-border bg-white text-charcoal placeholder:text-muted px-4 py-3 text-sm font-sans outline-none focus:border-brass transition-colors rounded-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-7 py-3 text-xs font-sans font-medium tracking-widest uppercase bg-charcoal text-white hover:bg-brass transition-colors duration-200 cursor-pointer disabled:opacity-60 rounded-none"
      >
        {status === "loading" ? "Joining…" : "Join the List"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 font-sans">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
