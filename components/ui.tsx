import Link from "next/link";
import type { ReactNode } from "react";

export function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "purple",
}: {
  href: string;
  children: ReactNode;
  variant?: "purple" | "green" | "outline" | "gradient";
}) {
  const styles = {
    purple:
      "border-primary-container bg-primary-container text-white hover:bg-primary hover:text-[#23005c]",
    green: "border-secondary bg-secondary text-[#002109] hover:brightness-110",
    outline:
      "border-outline-variant bg-transparent text-on-surface hover:border-primary hover:bg-surface-high",
    gradient:
      "brand-gradient border-transparent text-[#06100b] hover:brightness-110",
  };
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded border px-8 py-3 font-semibold transition hover:-translate-y-0.5 ${styles[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  title,
  text,
  eyebrow,
  align = "center",
}: {
  title: ReactNode;
  text?: string;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-12 max-w-2xl md:mb-20 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[.14em] text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {text && <p className="text-lg">{text}</p>}
    </div>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-5">
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span className="icon filled-icon text-secondary">check_circle</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
