import { z } from "zod";

export const speakingInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  eventName: z.string().min(2, "Event name must be at least 2 characters"),
  proposedDate: z.string().min(1, "Please provide a proposed date"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  audienceSize: z.string().min(1, "Please provide an audience size"),
  budgetRange: z.enum(["Under $1,000", "$1,000 – $5,000", "$5,000 – $10,000", "$10,000+", "To be discussed"]),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  reason: z.enum([
    "Speaking invitation",
    "Partnership inquiry",
    "Donation / Support",
    "Media / Press",
    "Volunteer opportunity",
    "General inquiry",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SpeakingInquiryData = z.infer<typeof speakingInquirySchema>;
export type ContactData = z.infer<typeof contactSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
