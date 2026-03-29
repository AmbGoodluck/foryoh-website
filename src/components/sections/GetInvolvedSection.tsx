// This file is deprecated and can be deleted.
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import NewsletterForm from "@/components/forms/NewsletterForm";

const cards = [
  {
    emoji: "🤝",
    title: "Partner with Sheku & YACAP",
    description: "For institutions, NGOs, governments, and international organizations looking to align programming with youth-led development outcomes in West Africa.",
    bgClass: "getinvolved-bg-purple",
    button: { label: "Explore Partnerships", variant: "primary" as const, href: "#contact" },
    buttonStyle: "accent",
  },
  {
    emoji: "💚",
    title: "Support Youth Programs",
    description: "Direct funding enables YACAP to expand the youth ambassador network, run leadership summits, and deliver ICT training to more young people.",
    bgClass: "getinvolved-bg-purple",
    button: { label: "Donate Now", variant: "primary" as const, href: "#contact" },
    buttonStyle: "accent",
  },
  {
    emoji: "✋",
    title: "Volunteer & Mentorship",
    description: "Share your expertise — in digital skills, communications, policy, or program management — to directly support YACAP youth and staff.",
    bgClass: "getinvolved-bg-gold",
    button: { label: "Join as Volunteer", variant: "secondary" as const, href: "#contact" },
    buttonStyle: "default",
  },
];

export default function GetInvolvedSection() {
  return (
    <section id="get-involved" className="section-alt py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.13em] uppercase text-accent">Get Involved</span>
          </div>
          <h2 className="font-display text-[clamp(2.1rem,3.5vw,3rem)] text-white leading-tight mb-6 drop-shadow-lg">
            Join the Movement
          </h2>
          <p className="text-[#8a95a5] text-lg max-w-2xl">
            Whether you&apos;re an institution, individual, or organization — there&apos;s a meaningful way to contribute to youth-led development in Africa.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="card p-8 hover:shadow-2xl hover:border-accent/30 transition-all h-full flex flex-col group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 bg-opacity-80 group-hover:scale-105 transition-transform ${card.bgClass}`}>
                  {card.emoji}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{card.title}</h4>
                <p className="text-[#8a95a5] text-base leading-relaxed flex-1 mb-7">{card.description}</p>
                <div>
                    <Button variant={card.button.variant} href={card.button.href} className="min-w-[150px] text-base">
                    {card.button.label}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter */}
        <ScrollReveal>
          <div
            className="card p-10 md:p-14 shadow-xl getinvolved-newsletter-bg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.13em] uppercase text-accent">Stay Connected</span>
            </div>
            <h3 className="font-display text-2xl text-white mb-3">Join the Youth & Partners Newsletter</h3>
            <p className="text-[#8a95a5] text-base mb-7 max-w-xl">
              Policy updates, program launches, speaking announcements, and opportunities to engage with youth-led development across Africa.
            </p>
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
