"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { isEmail } from "../../lib/validations";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang).form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const inputClasses =
    "w-full rounded-[4px] border border-line bg-background px-4 py-3 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-primary";

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
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError(dict.genericError);
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8">
        <p className="font-mono font-semibold text-secondary">
          {dict.successTitle}
        </p>
        <p className="text-sm leading-relaxed text-muted">{dict.successText}</p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          {dict.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
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
          className={`${inputClasses} resize-none`}
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
