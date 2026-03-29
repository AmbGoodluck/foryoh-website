import { Mail } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

const socialLinks = [
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/sheku-foryoh-5a790424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { label: "X / Twitter", href: "https://x.com/sheku_foryoh?s=21" },
  { label: "Facebook",   href: "https://www.facebook.com/share/19uTAoscZf/?mibextid=wwXIfr" },
  { label: "Instagram",  href: "https://www.instagram.com/shekuforyoh/profilecard/?igsh=azY5OThnb3J4bndk" },
  { label: "TikTok",     href: "https://www.tiktok.com/@shekuforyoho?_t=ZM-8vklIWvxpAM&_r=1" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-alt py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.13em] uppercase text-accent">Contact</span>
          </div>
          <h2 className="font-display text-[clamp(2.1rem,3.5vw,3rem)] text-white leading-tight drop-shadow-lg">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <ScrollReveal direction="left">
            <h3 className="font-display text-2xl text-white mb-5">Reach Out Directly</h3>
            <p className="text-[#8a95a5] text-lg leading-relaxed mb-10">
                  Whether you&apos;re looking to collaborate, invite Sheku to speak, or explore partnership opportunities - I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:Shekuforyoh1@gmail.com"
              className="inline-flex items-center gap-3 text-accent text-lg font-semibold hover:opacity-80 transition mb-12"
            >
              <Mail size={22} />
              Shekuforyoh1@gmail.com
            </a>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8a95a5] mb-5">Follow</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-base font-semibold text-[#8a95a5] px-5 py-2 rounded-full border border-white/[0.07] hover:border-accent hover:text-accent transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right">
            <div className="card p-10 shadow-xl">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
