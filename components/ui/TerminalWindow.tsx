import React from "react";

type TerminalWindowProps = {
  title?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export default function TerminalWindow({
  title,
  headerRight,
  children,
  className = "",
  dark = false,
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line ${
        dark ? "bg-[#0f172a] dark:bg-surface-raised" : "bg-surface"
      } ${className}`}
    >
      <div
        className={`flex min-w-0 items-center justify-between gap-2 px-3 py-3 sm:px-4 ${
          dark
            ? "bg-[#1e293b] dark:bg-surface-high"
            : "bg-surface-raised border-b border-line"
        }`}
      >
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f56] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#27c93f] sm:h-3 sm:w-3" />
          <span
            className={`ml-1 min-w-0 truncate font-mono text-[11px] sm:ml-3 sm:text-xs ${
              dark ? "text-gray-400" : "text-muted"
            }`}
          >
            {title ?? "portfolio.tsx"}
          </span>
        </div>
        {headerRight && <div className="ml-1 flex shrink-0 items-center sm:ml-2">{headerRight}</div>}
      </div>
      <div className="min-w-0 p-3 sm:p-5 md:p-6">{children}</div>
    </div>
  );
}
