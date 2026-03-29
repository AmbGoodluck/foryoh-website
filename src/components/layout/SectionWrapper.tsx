import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SectionWrapperProps {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  label,
  title,
  description,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        {(label || title || description) && (
          <ScrollReveal className="mb-12 md:mb-16">
            {label && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-green" />
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green">
                  {label}
                </span>
              </div>
            )}
            {title && (
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-white leading-tight mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-[#8a95a5] text-base leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
