import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  variant?: "default" | "paper" | "dark";
  className?: string;
  id?: string;
};

const sectionVariants = {
  default: "bg-transparent text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-night text-white"
};

export function Section({
  children,
  variant = "default",
  className,
  id
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        sectionVariants[variant],
        className
      )}
    >
      {children}
    </section>
  );
}

type ContainerProps = {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
};

const containerSizes = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl"
};

export function Container({
  children,
  size = "default",
  className
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  action,
  className
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center sm:flex-col sm:items-center",
        className
      )}
    >
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto"
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
        {description ? (
          <p
            className={cn(
              "mt-4 text-base leading-7 sm:text-lg sm:leading-8",
              dark ? "text-white/65" : "text-muted"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

type SectionGridProps = {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
};

const gridCols = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4"
};

export function SectionGrid({ children, cols = 2, className }: SectionGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:gap-6",
        gridCols[cols],
        className
      )}
    >
      {children}
    </div>
  );
}

type SplitLayoutProps = {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

export function SplitLayout({
  children,
  reverse = false,
  className
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SplitAside({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("lg:col-span-5 xl:col-span-5", className)}>
      {children}
    </div>
  );
}

export function SplitMain({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("lg:col-span-7 xl:col-span-7", className)}>
      {children}
    </div>
  );
}

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  media,
  dark = false,
  className
}: PageHeroProps) {
  return (
    <Section
      variant={dark ? "dark" : "default"}
      className={cn("pt-12 sm:pt-16 lg:pt-20", className)}
    >
      <Container size="wide">
        <SplitLayout>
          <SplitAside>
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
            <h1
              className={cn(
                "text-display font-bold tracking-tight",
                eyebrow && "mt-4",
                dark ? "text-white" : "text-ink"
              )}
            >
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8",
                  dark ? "text-white/65" : "text-muted"
                )}
              >
                {description}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            ) : null}
          </SplitAside>
          {media ? <SplitMain>{media}</SplitMain> : null}
        </SplitLayout>
      </Container>
    </Section>
  );
}
