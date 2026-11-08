import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-base font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100 disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Green/100 — accent button, one per screen (per Figma component notes)
  primary: "bg-green-100 text-white hover:bg-green-120",
  // Gray/25 bg + Gray/400 border
  secondary: "bg-gray-25 border border-gray-400 text-ink hover:bg-gray-100",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  href,
  children,
}: Props & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
