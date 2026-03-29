// This file is deprecated and can be deleted.
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { speakingInquirySchema, SpeakingInquiryData } from "@/lib/validations";
import Button from "@/components/ui/Button";

export default function SpeakingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SpeakingInquiryData>({
    resolver: zodResolver(speakingInquirySchema),
  });

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-white/[0.06] bg-navy text-[#e8ecf1] placeholder-[#4a5568] focus:border-green focus:outline-none transition text-sm";
  const labelClass = "block text-xs font-medium text-[#8a95a5] tracking-wide mb-1.5";

  const onSubmit = async (data: SpeakingInquiryData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/speaking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-6 h-px bg-green" />
          <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green">Book a Talk</span>
          <div className="w-6 h-px bg-green" />
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Invite Sheku to Speak</h3>
        <p className="text-[#8a95a5] text-sm max-w-md mx-auto">
          Complete the form below and we&apos;ll respond within 48 hours to confirm availability and discuss details.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-10">
          <div className="w-12 h-12 rounded-full bg-[rgba(30,184,84,0.12)] flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1eb854" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4 className="text-white font-semibold mb-2">Invitation Submitted!</h4>
          <p className="text-[#8a95a5] text-sm">We&apos;ll be in touch within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Your Name *</label>
            <input {...register("name")} placeholder="Full name" className={inputClass} />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Organization *</label>
            <input {...register("organization")} placeholder="Organization or institution" className={inputClass} />
            {errors.organization && <p className="text-red-400 text-xs mt-1">{errors.organization.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Event Name *</label>
            <input {...register("eventName")} placeholder="Conference, summit, etc." className={inputClass} />
            {errors.eventName && <p className="text-red-400 text-xs mt-1">{errors.eventName.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Proposed Date *</label>
            <input {...register("proposedDate")} type="date" className={inputClass} />
            {errors.proposedDate && <p className="text-red-400 text-xs mt-1">{errors.proposedDate.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Location *</label>
            <input {...register("location")} placeholder="City, Country / Virtual" className={inputClass} />
            {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Audience Size *</label>
            <input {...register("audienceSize")} placeholder="e.g., 200 attendees" className={inputClass} />
            {errors.audienceSize && <p className="text-red-400 text-xs mt-1">{errors.audienceSize.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Budget Range *</label>
            <select {...register("budgetRange")} className={inputClass}>
              <option value="">Select budget range</option>
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000 – $5,000">$1,000 – $5,000</option>
              <option value="$5,000 – $10,000">$5,000 – $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="To be discussed">To be discussed</option>
            </select>
            {errors.budgetRange && <p className="text-red-400 text-xs mt-1">{errors.budgetRange.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Email Address *</label>
            <input {...register("email")} type="email" placeholder="your@email.com" className={inputClass} />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Message *</label>
            <textarea
              {...register("message")}
              placeholder="Tell us about your event, audience, and what you'd like Sheku to address..."
              rows={4}
              className={inputClass}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>
          {status === "error" && (
            <div className="md:col-span-2">
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            </div>
          )}
          <div className="md:col-span-2">
            <Button
              variant="primary"
              type="submit"
              fullWidth
              disabled={status === "loading"}
              icon={status === "loading" ? <Loader2 size={18} className="animate-spin" /> : undefined}
            >
              {status === "loading" ? "Submitting..." : "Submit Invitation"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
