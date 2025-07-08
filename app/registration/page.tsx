"use client";

import InputField from "@/components/InputFieldRegistration";
import {
  RegistrationFormValues,
  registrationSchema,
} from "@/lib/registrationValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography, Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";

export default function Registration() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    enqueueSnackbar("Erfolgreich registriert!", { variant: "success" });
    router.push("/");
    // TODO: implement registration in backend
  };

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component="h2" variant="h2">
        Registrieren
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          width: { xs: "100%", md: "70%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 4,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "16px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ width: "100%" }}>
            <InputField
              name="firstName"
              label="Vorname*"
              register={register}
              error={errors.firstName?.message}
              placeholder="Max"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <InputField
              name="lastName"
              label="Nachname*"
              register={register}
              error={errors.lastName?.message}
              placeholder="Mustermann"
            />
          </Box>
        </Box>

        <InputField
          name="username"
          label="Benutzername*"
          register={register}
          error={errors.username?.message}
          placeholder="Dein Benutzername"
        />

        <InputField
          name="password"
          label="Passwort*"
          register={register}
          error={errors.password?.message}
          type="password"
        />

        <InputField
          name="passwordConfirm"
          label="Passwort wiederholen*"
          register={register}
          error={errors.passwordConfirm?.message}
          type="password"
        />

        <Link href="/login">Du hast schon ein Konto? Jetzt einloggen.</Link>

        <Button type="submit" disabled={isSubmitting} sx={{ ml: "auto" }}>
          Registrieren
        </Button>
      </Box>
    </Box>
  );
}
