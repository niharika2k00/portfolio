import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  icon: ReactNode;
};

export function IconLink({ label, icon, className, ...props }: IconLinkProps) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-pill",
        "border border-border bg-surface/50 text-muted backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-accent hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {icon}
    </a>
  );
}
