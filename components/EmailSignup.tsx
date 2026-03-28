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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
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
      <p className={`text-sm font-sans font-medium ${dark ? "text-white/80" : "text-[#A0978E]"}`}>
        Perfect. Check your email for new finds.
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
        placeholder="Enter your email"
        className={`w-full sm:flex-1 border px-4 py-3 text-sm font-sans outline-none transition-all duration-300 focus:ring-1 rounded-none ${
          dark
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-white/10"
            : "bg-white border-[#E5DDD5] text-[#3C3C3C] placeholder:text-[#A0978E] focus:border-[#A0978E] focus:ring-[#A0978E]/20"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-6 py-3 text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-none whitespace-nowrap ${
          dark
            ? "bg-white text-[#3C3C3C] hover:bg-white/90"
            : "bg-[#3C3C3C] text-white hover:bg-[#2B2B2B]"
        }`}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className={`text-xs font-sans mt-1 ${dark ? "text-white/60" : "text-[#D4A5A5]"}`}>
          Please try again.
        </p>
      )}
    </form>
  );
}
