import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gradient" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 font-medium rounded-pill " +
  "transition-all duration-300 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "active:scale-[0.98]";

const variantStyles: Record<Variant, string> = {
  gradient:
    "bg-gradient-brand text-accent-fg shadow-lg shadow-accent/25 " +
    "hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.02] " +
    "overflow-hidden " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent " +
    "hover:before:translate-x-full before:transition-transform before:duration-700",
  ghost:
    "border border-border bg-surface/50 backdrop-blur-sm text-fg " +
    "hover:bg-accent/10 hover:border-accent hover:text-accent",
  outline:
    "border border-fg/20 bg-transparent text-fg " +
    "hover:bg-fg/5 hover:border-fg/40",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "gradient", size = "md", className, children, ...props }, ref) {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (props.as === "a") {
      const { as, ...anchorProps } = props;
      void as;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </a>
      );
    }

    const { as, ...buttonProps } = props as ButtonAsButton;
    void as;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
