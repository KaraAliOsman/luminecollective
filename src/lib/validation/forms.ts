import { z } from "zod";

const consentSchema = z.literal(true, {
  error: "Toestemming is verplicht.",
});

const honeypotSchema = z
  .string()
  .max(0, "Spamcontrole mislukt.")
  .optional()
  .or(z.literal(""));

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  subject: z.string().trim().min(2, "Vul een onderwerp in."),
  message: z.string().trim().min(10, "Schrijf minimaal 10 tekens."),
  consent: consentSchema,
  website: honeypotSchema,
});

export const volunteerFormSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z.string().trim().max(40, "Telefoonnummer is te lang.").optional(),
  interest: z.enum(
    ["Events", "Communicatie", "Begeleiding", "Fotografie", "Organisatie", "Anders"],
    {
      error: "Kies hoe je wilt helpen.",
    },
  ),
  message: z.string().trim().min(10, "Schrijf minimaal 10 tekens."),
  consent: consentSchema,
  website: honeypotSchema,
});

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  consent: consentSchema,
  website: honeypotSchema,
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type VolunteerFormInput = z.infer<typeof volunteerFormSchema>;
export type NewsletterFormInput = z.infer<typeof newsletterFormSchema>;

export type FormErrors = Record<string, string[] | undefined>;

export const formMessages = {
  contactSuccess:
    "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
  newsletterSuccess: "Je bent ingeschreven. Welkom bij onze community.",
  volunteerSuccess:
    "Bedankt voor je interesse. We nemen zo snel mogelijk contact met je op.",
  error: "Er ging iets mis. Probeer het opnieuw of stuur ons direct een e-mail.",
  consent:
    "Ik ga akkoord met de verwerking van mijn gegevens volgens het privacybeleid.",
} as const;
