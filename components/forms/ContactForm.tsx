"use client";

import React from "react";
import { Box, Button, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";
import { ContactFormValues, contactSchema } from "@/lib/contactValidation";
import InputField from "@/components/forms/InputField"; // generischer InputField
import { useRouter } from "next/navigation";
import FormLegend from "../FormLegend";

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    enqueueSnackbar("Nachricht gesendet!", { variant: "success" });
    router.push("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: 2,
      }}
    >
      <FormLegend text="Um die Kontaktabfrage abzuschicken, klicke den Button unten mit der Beschriftung 'Senden'" />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <InputField<ContactFormValues>
            name="firstName"
            label="Vorname"
            register={register}
            error={errors.firstName?.message}
            placeholder="Max"
            autoComplete="given-name"
            required
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <InputField<ContactFormValues>
            name="lastName"
            label="Nachname"
            register={register}
            error={errors.lastName?.message}
            placeholder="Mustermann"
            autoComplete="family-name"
            required
          />
        </Box>
      </Box>

      <InputField<ContactFormValues>
        name="email"
        label="E-Mail"
        register={register}
        error={errors.email?.message}
        placeholder="maxmustermann@mustermail.de"
        type="email"
        autoComplete="email"
        required
      />

      <InputField<ContactFormValues>
        name="phone"
        label="Telefon (optional)"
        register={register}
        error={errors.phone?.message}
        placeholder="0123456789"
        type="tel"
        autoComplete="tel"
      />

      <InputField<ContactFormValues>
        name="message"
        label="Nachricht"
        register={register}
        error={errors.message?.message}
        placeholder="Schreiben Sie uns eine Nachricht"
        multiline
        minRows={5}
        required
      />

      <FormControl variant="standard" fullWidth>
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ alignSelf: "flex-end" }}
        >
          Senden
        </Button>
      </FormControl>
    </Box>
  );
}
