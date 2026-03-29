"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { newsletterSchema, NewsletterData } from "@/lib/validations";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
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

  if (status === "success") {
    return (
      <div className="py-4">
        <p className="text-green font-medium">You&apos;re subscribed! Welcome to the community.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-full border border-white/[0.06] bg-navy text-[#e8ecf1] placeholder-[#4a5568] focus:border-green focus:outline-none transition text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-green text-navy rounded-full px-7 py-3 text-sm font-semibold hover:bg-[#22d460] transition-all duration-300 whitespace-nowrap flex items-center gap-2 justify-center disabled:opacity-50 cursor-pointer"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          Subscribe
        </button>
      </form>
      {errors.email && <p className="text-red-400 text-xs mt-2 pl-2">{errors.email.message}</p>}
      {status === "error" && <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>}
    </div>
  );
}
