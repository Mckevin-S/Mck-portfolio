import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  external?: boolean;
  download?: boolean | string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-3 font-mono text-sm font-semibold tracking-wide transition-all duration-200 select-none";

const variants = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-dim",
  ghost:
    "border border-line text-text hover:border-primary hover:text-primary",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  download,
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
