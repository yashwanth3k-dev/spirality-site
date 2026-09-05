import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

type BrandProps = {
  light?: boolean;
  className?: string;
};

export function Brand({ light = false, className }: BrandProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <LogoMark className={cn("h-10 w-10", light && "text-white")} />
      <span className="leading-none">
        <span
          className={cn(
            "block text-base font-extrabold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          Spirality Solutions
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-bold uppercase tracking-[0.24em]",
            light ? "text-white/55" : "text-slate-500"
          )}
        >
          AI Systems & Managed Operations
        </span>
      </span>
    </Link>
  );
}
