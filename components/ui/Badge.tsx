import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-medium",
        "border font-mono tracking-tight",
        variant === "default" &&
          "border-border bg-surface/60 text-muted backdrop-blur-sm",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        className
      )}
      {...props}
    />
  );
}
