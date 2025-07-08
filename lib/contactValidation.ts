import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  message: z.string().min(1, "Nachricht darf nicht leer sein"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
