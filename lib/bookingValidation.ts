import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  ticketCount: z.number().min(1, "Mindestens 1 Ticket buchen"),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
