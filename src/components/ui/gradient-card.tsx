"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { cn } from "~/lib/utils";

/** Spirality dark gradients — not the light orange/purple stock pack. */
const cardVariants = cva(
  "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_48px_-28px_rgba(21,57,209,0.55)]",
  {
    variants: {
      gradient: {
        blue: "border-[rgba(21,57,209,0.35)] bg-[linear-gradient(152deg,rgba(21,57,209,0.28),rgba(21,57,209,0.06)_48%,rgba(8,8,14,0.95)_78%)] hover:border-[rgba(107,124,255,0.55)]",
        mist: "border-[rgba(255,255,255,0.1)] bg-[linear-gradient(152deg,rgba(223,232,248,0.1),rgba(255,255,255,0.02)_50%,rgba(8,8,14,0.95))] hover:border-[rgba(255,255,255,0.22)]",
        ink: "border-[rgba(255,255,255,0.1)] bg-[linear-gradient(152deg,rgba(255,255,255,0.06),rgba(8,8,14,0.95)_70%)] hover:border-[rgba(255,255,255,0.2)]",
        stamp:
          "border-[rgba(194,75,50,0.28)] bg-[linear-gradient(152deg,rgba(194,75,50,0.18),rgba(21,57,209,0.08)_42%,rgba(8,8,14,0.95))] hover:border-[rgba(194,75,50,0.45)]",
      },
    },
    defaultVariants: {
      gradient: "ink",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl?: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient,
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      imageUrl,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("group h-full", className)} {...props}>
        <div className={cn(cardVariants({ gradient }), "min-h-[240px]")}>
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1/4 -right-1/4 w-3/4 opacity-30 grayscale transition-[transform,filter,opacity] duration-500 ease-out group-hover:rotate-3 group-hover:scale-110 group-hover:opacity-55 group-hover:grayscale-0"
            />
          ) : (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(21,57,209,0.35),transparent_68%)] transition-transform duration-500 group-hover:scale-125"
            />
          )}

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>

            <div className="flex-grow">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/55">
                {description}
              </p>
            </div>

            <a
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
