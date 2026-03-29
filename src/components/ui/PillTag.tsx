import { cn } from "@/lib/utils";

interface PillTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function PillTag({ children, className }: PillTagProps) {
  return (
    <span
      className={cn(
        "text-[0.8rem] font-medium text-[#8a95a5] px-4 py-2 rounded-full border border-white/[0.06] hover:border-white/15 hover:text-[#e8ecf1] transition cursor-default",
        className
      )}
    >
      {children}
    </span>
  );
}
