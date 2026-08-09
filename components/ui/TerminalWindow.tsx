import React from "react";

type TerminalWindowProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`card overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-surface-raised px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate font-mono text-xs text-muted">
          {title ?? "portfolio.tsx"}
        </span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
