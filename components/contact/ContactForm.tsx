"use client";

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { isEmail } from "../../lib/validations";
import { getDictionary } from "../../lib/dictionary";
import { useLang } from "../../lib/language-context";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { lang } = useLang();
  const dict = getDictionary(lang).form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot anti-spam
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(6);

  // Auto reset form to idle after successful submission
  useEffect(() => {
    if (status !== "success") return;
    setCountdown(6);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStatus("idle");
          return 6;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [status]);

  const inputClasses =
    "w-full rounded-[4px] border border-line bg-surface px-4 py-3 font-mono text-base text-text placeholder:text-muted/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 sm:text-sm";

  const labelClasses =
    "mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus("error");
      setError(dict.requiredError);
      return;
    }
    if (!isEmail(email)) {
      setStatus("error");
      setError(dict.emailError);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setStatus("error");
      setError(dict.genericError);
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8 transition-all duration-300">
        <p className="font-mono font-semibold text-secondary">
          {dict.successTitle}
        </p>
        <p className="text-sm leading-relaxed text-muted">{dict.successText}</p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            {dict.sendAnother}
          </Button>
          <span className="font-mono text-xs text-muted">
            {dict.autoReset} {countdown}s
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card min-w-0 space-y-5 p-4 sm:p-6 md:p-8">
      {/* Honeypot field invisible to humans, filled only by automated spam bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="website-hp">Website</label>
        <input
          id="website-hp"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            {dict.name}
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder={dict.namePlaceholder}
            className={inputClasses}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            {dict.email}
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder={dict.emailPlaceholder}
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          {dict.message}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={dict.messagePlaceholder}
          className={`${inputClasses} min-h-32 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error && (
        <p className="font-mono text-sm text-error" role="alert">
          ✕ {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? dict.sending : dict.submit}
      </Button>
    </form>
  );
}
