import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface-raised px-3.5 py-1.5 font-mono text-xs font-medium tracking-wide text-text/90">
      {children}
    </span>
  );
}
