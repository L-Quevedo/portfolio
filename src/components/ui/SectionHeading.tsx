"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-gradient-soft md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base text-[var(--color-muted)] md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
