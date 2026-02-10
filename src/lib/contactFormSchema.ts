import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email"),
  projectDetails: z.string().min(10, "Please describe your project (at least 10 characters)"),
  budget: z.string().optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
