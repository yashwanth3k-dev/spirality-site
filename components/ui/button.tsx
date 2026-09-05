import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#172f70]",
  secondary:
    "border border-line bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:border-brand/40",
  ghost: "text-ink hover:bg-slate-100",
  dark: "bg-white text-night hover:-translate-y-0.5 hover:bg-white/90"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
