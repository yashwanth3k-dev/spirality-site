import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "dark" | "outline";
  className?: string;
};

const cardVariants = {
  default: "border-line bg-white shadow-soft",
  dark: "border-white/10 bg-white/[0.04]",
  outline: "border-line bg-paper"
};

export function Card({
  children,
  variant = "default",
  className
}: CardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border p-6 md:p-7",
        cardVariants[variant],
        className
      )}
    >
      {children}
    </article>
  );
}

export function CardHeader({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      {children}
    </div>
  );
}

export function CardIcon({
  children,
  dark = false,
  className
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
        dark ? "bg-white/10 text-brandSoft" : "bg-brand/10 text-brand",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardEyebrow({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-sm font-bold tabular-nums tracking-wide text-slate-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export function CardTitle({
  children,
  dark = false,
  className
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "mt-5 text-h3 font-bold",
        dark ? "text-white" : "text-ink",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  dark = false,
  className
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 text-sm leading-6 text-muted md:text-[0.9375rem] md:leading-7",
        dark && "text-white/60",
        className
      )}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-5 flex-1", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-6 pt-2", className)}>{children}</div>;
}

export function CardTag({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-paper px-3 py-1 text-xs font-semibold text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
