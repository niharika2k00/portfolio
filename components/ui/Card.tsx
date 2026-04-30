import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-surface/40 backdrop-blur-md",
        "transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
