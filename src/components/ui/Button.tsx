import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[0.98rem]",
  lg: "px-9 py-4 text-lg",
};

const variantClasses = {
  primary:
    "bg-accent text-[#0a1420] shadow-lg hover:bg-accent-dim focus:bg-accent-dim hover:-translate-y-0.5 focus:-translate-y-0.5 transition-all border-none",
  secondary:
    "bg-transparent border border-white/15 text-[#e8ecf1] hover:border-accent focus:border-accent hover:bg-white/[0.04] focus:bg-white/[0.06]",
  ghost: "bg-transparent text-[#8a95a5] hover:text-accent focus:text-accent",
};

export default function Button({
  variant,
  size = "md",
  children,
  href,
  icon,
  iconPosition = "right",
  className,
  onClick,
  type = "button",
  disabled,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
