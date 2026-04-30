import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-sm font-mono font-bold uppercase tracking-[0.18em] text-fg",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-10 bg-accent" aria-hidden />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif italic text-4xl md:text-6xl font-normal tracking-tight text-fg">
        {title}
      </h2>
      {description && (
        <p className="max-w-5xl text-pretty text-base md:text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
