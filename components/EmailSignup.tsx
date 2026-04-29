"use client";

import { useState } from "react";

type EmailSignupProps = {
  readonly compact?: boolean;
  readonly dark?: boolean;
};

export default function EmailSignup({ compact = false, dark = false }: EmailSignupProps) {
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
      <p className={`text-sm font-sans font-medium ${dark ? "text-rose-light" : "text-rose"}`}>
        Perfect. Check your email for new finds.
      </p>
    );
  }

  const inputBg = dark ? "bg-charcoal/10" : "bg-off-white";
  const inputBorder = dark ? "border-warm-beige/40" : "border-warm-beige";
  const inputText = dark ? "text-white placeholder:text-warm-beige/60" : "text-charcoal placeholder:text-muted";
  const buttonBg = dark ? "bg-rose hover:bg-rose-light text-charcoal" : "bg-charcoal hover:bg-charcoal-dark text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 sm:gap-4 sm:flex-row ${compact ? "w-full" : ""}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={`w-full sm:flex-1 border ${inputBorder} ${inputBg} ${inputText} px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-sans outline-none transition-all duration-300 focus:border-rose focus:ring-1 focus:ring-rose/20 rounded-none`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-sans font-medium tracking-widest uppercase ${buttonBg} transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-none whitespace-nowrap`}
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-rose-light font-sans mt-1">Please try again.</p>
      )}
    </form>
  );
}
