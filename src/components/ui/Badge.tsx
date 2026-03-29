import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "gold" | "neutral";
  className?: string;
}

const variantClasses = {
  green: "bg-[rgba(30,184,84,0.12)] text-green",
  blue: "bg-[rgba(45,125,210,0.1)] text-blue",
  gold: "bg-[rgba(212,168,67,0.12)] text-gold",
  neutral: "bg-white/[0.06] text-[#e8ecf1]",
};

export default function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-[0.7rem] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
