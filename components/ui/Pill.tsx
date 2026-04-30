import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Pill({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-accent-3/30",
        "bg-accent-3/15 px-3 py-1 text-xs font-medium text-accent-3",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
      </span>
      {children}
    </span>
  );
}
