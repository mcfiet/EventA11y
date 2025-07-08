import { z } from "zod";

export const eventSchema = z
  .object({
    title: z.string().min(1, "Titel ist erforderlich"),
    startDate: z
      .date({ required_error: "Startdatum ist erforderlich" })
      .nullable(),
    endDate: z.date({ required_error: "Enddatum ist erforderlich" }).nullable(),
    ticketNumber: z
      .number({ required_error: "Ticketanzahl ist erforderlich" })
      .min(1, "Mindestens 1 Ticket"),
    locationName: z.string().min(1, "Name der Location ist erforderlich"),
    street: z.string().min(1, "Straße & Hausnummer sind erforderlich"),
    postalCode: z.string().min(1, "Postleitzahl ist erforderlich"),
    city: z.string().min(1, "Ort ist erforderlich"),
    accessible: z.boolean().optional(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
    tags: z.array(z.string()).min(1, "Mindestens ein Tag auswählen"),
    image: z
      .instanceof(File, { message: "Bild muss eine Datei sein" })
      .nullable()
      .optional(),
  })
  .refine(
    (data) =>
      !data.startDate || !data.endDate || data.endDate >= data.startDate,
    {
      message: "Enddatum muss am oder nach dem Startdatum sein",
      path: ["endDate"],
    },
  );

export type EventFormValues = z.infer<typeof eventSchema>;
