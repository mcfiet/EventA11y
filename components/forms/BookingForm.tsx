"use client";

import React, { useState } from "react";
import { Box, Button, Typography, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import InputField from "@/components/forms/InputField";
import { BookingFormValues, bookingSchema } from "@/lib/bookingValidation";
import BookingConfirmation from "../BookingConfirmation";
import FormLegend from "../FormLegend";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingReview from "../BookingReview"; // NEU

interface BookingFormProps {
  eventTitle: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ eventTitle }) => {
  const [step, setStep] = useState<"form" | "review" | "confirmation">("form");
  const [formData, setFormData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      ticketCount: 1,
      message: "",
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    setFormData(data);
    setStep("review");
  };

  const handleConfirm = () => {
    if (formData) {
      enqueueSnackbar("Buchung gesendet!", { variant: "success" });
      setStep("confirmation");
    }
  };

  const handleEdit = () => {
    setStep("form");
  };

  if (step === "confirmation" && formData) {
    return (
      <BookingConfirmation
        eventTitle={eventTitle}
        firstName={formData.firstName}
        lastName={formData.lastName}
        email={formData.email}
        ticketCount={formData.ticketCount}
      />
    );
  }

  if (step === "review" && formData) {
    return (
      <BookingReview
        eventTitle={eventTitle}
        data={formData}
        onEdit={handleEdit}
        onConfirm={handleConfirm}
      />
    );
  }

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
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Tickets buchen für: <br />
        <span style={{ color: "#84234f" }}>{eventTitle}</span>
      </Typography>
      <FormLegend text="Um die Buchung abzuschicken, klicke den Button unten mit der Beschriftung 'Buchung abschicken'" />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <InputField<BookingFormValues>
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
          <InputField<BookingFormValues>
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

      <InputField<BookingFormValues>
        name="email"
        label="E-Mail"
        register={register}
        error={errors.email?.message}
        placeholder="maxmustermann@mustermail.de"
        type="email"
        autoComplete="email"
        required
      />

      <InputField<BookingFormValues>
        name="ticketCount"
        label="Ticketanzahl"
        placeholder="2"
        register={register}
        error={errors.ticketCount?.message}
        type="number"
        required
      />

      <InputField<BookingFormValues>
        name="message"
        label="Nachricht (optional)"
        register={register}
        error={errors.message?.message}
        placeholder="Optional: Hinweise oder Fragen zur Buchung"
        multiline
        minRows={3}
      />

      <FormControl variant="standard" fullWidth>
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ alignSelf: "flex-end" }}
        >
          Buchungszusammenfassung ansehen
        </Button>
      </FormControl>
    </Box>
  );
};

export default BookingForm;
