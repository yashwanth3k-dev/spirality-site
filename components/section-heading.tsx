import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

/** @deprecated Prefer SectionHeader from @/components/layout */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className,
  dark = false
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-white/50" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-h2 font-bold tracking-tight",
          eyebrow && "mt-3",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg sm:leading-8",
            dark ? "text-white/65" : "text-muted"
          )}
        >
          {children}
        </p>
      ) : null}
    </header>
  );
}
