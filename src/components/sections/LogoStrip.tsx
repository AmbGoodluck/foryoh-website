import PillTag from "@/components/ui/PillTag";
import { partners } from "@/data/partners";

export default function LogoStrip() {
  return (
    <div className="border-t border-b border-white/[0.06] py-12">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <p className="text-center text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#8a95a5] mb-6">
          Trusted by Leading Institutions
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 items-center">
          {partners.map((partner) => (
            <PillTag key={partner}>{partner}</PillTag>
          ))}
        </div>
      </div>
    </div>
  );
}
