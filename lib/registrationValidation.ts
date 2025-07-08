import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z.string().min(1, "Vorname ist erforderlich"),
    lastName: z.string().min(1, "Nachname ist erforderlich"),
    username: z.string().min(1, "Benutzername ist erforderlich"),
    password: z.string().min(6, "Passwort muss mindestens 6 Zeichen haben"),
    passwordConfirm: z.string().min(1, "Bitte Passwort wiederholen"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwörter stimmen nicht überein",
    path: ["passwordConfirm"],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
