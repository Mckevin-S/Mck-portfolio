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
        className={`flex items-center justify-between px-4 py-3 ${
          dark
            ? "bg-[#1e293b] dark:bg-surface-high"
            : "bg-surface-raised border-b border-line"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span
            className={`ml-3 truncate font-mono text-xs ${
              dark ? "text-gray-400" : "text-muted"
            }`}
          >
            {title ?? "portfolio.tsx"}
          </span>
        </div>
        {headerRight && <div className="ml-2 flex items-center">{headerRight}</div>}
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
