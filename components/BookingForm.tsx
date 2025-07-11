"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import InputField from "./InputFieldBooking";
import { BookingFormValues } from "@/lib/bookingValidation";
import BookingConfirmation from "./BookingConfirmation";
import FormLegend from "./FormLegend";

interface BookingFormProps {
  eventTitle: string;
  maxTickets: number;
}

const BookingForm: React.FC<BookingFormProps> = ({
  eventTitle,
  maxTickets,
}) => {
  const [confirmation, setConfirmation] = useState<BookingFormValues | null>(
    null,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      ticketCount: 1,
      message: "",
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    setConfirmation(data);
    enqueueSnackbar("Buchung gesendet!", { variant: "success" });
  };

  if (confirmation) {
    return (
      <BookingConfirmation
        eventTitle={eventTitle}
        firstName={confirmation.firstName}
        lastName={confirmation.lastName}
        email={confirmation.email}
        ticketCount={confirmation.ticketCount}
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
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <FormLegend text="Um die Buchung abzuschicken, klicke den Button unten mit der Beschriftung 'Buchung abschicken'" />
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Tickets buchen für: <br />
        <span style={{ color: "#84234f" }}>{eventTitle}</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <InputField
            name="firstName"
            label="Vorname*"
            register={register}
            error={errors.firstName?.message}
            placeholder="Max"
            autocomplete="first-name"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <InputField
            name="lastName"
            label="Nachname*"
            register={register}
            error={errors.lastName?.message}
            placeholder="Mustermann"
            autocomplete="family-name"
          />
        </Box>
      </Box>

      <InputField
        name="email"
        label="E-Mail*"
        register={register}
        error={errors.email?.message}
        placeholder="maxmustermann@mustermail.de"
        type="email"
        autocomplete="email"
      />

      <FormControl
        variant="standard"
        error={!!errors.ticketCount}
        fullWidth
        sx={{ mt: 2 }}
      >
        <InputLabel id="ticketCount-label">Tickets*</InputLabel>
        <Controller
          control={control}
          name="ticketCount"
          rules={{ required: "Bitte Anzahl auswählen" }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="ticketCount-label"
              label="Tickets*"
              sx={{ borderRadius: 2 }}
            >
              {Array.from({ length: maxTickets }, (_, i) => (
                <MenuItem value={i + 1} key={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.ticketCount?.message}</FormHelperText>
      </FormControl>

      <InputField
        name="message"
        label="Nachricht (optional)"
        register={register}
        error={errors.message?.message}
        placeholder="Optional: Hinweise oder Fragen zur Buchung"
        multiline
        minRows={3}
      />

      <FormControl variant="standard" error={false} fullWidth>
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ alignSelf: "flex-end" }}
        >
          Buchung abschicken
        </Button>
      </FormControl>
    </Box>
  );
};

export default BookingForm;
