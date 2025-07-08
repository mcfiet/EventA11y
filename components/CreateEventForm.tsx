"use client";

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import UploadInput from "./UploadInput";
import TagSelect from "./TagSelect";
import { eventSchema, EventFormValues } from "@/lib/eventValidation";
import InputField from "./InputFieldEvent";
import DatePickerField from "./Datepicker";

export default function CreateEventForm() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      startDate: null,
      endDate: null,
      ticketNumber: 0,
      locationName: "",
      street: "",
      postalCode: "",
      city: "",
      accessible: false,
      shortDescription: "",
      longDescription: "",
      tags: [],
      image: null,
    },
  });

  const onSubmit = (data: EventFormValues) => {
    enqueueSnackbar("Event erstellt!", { variant: "success" });
    router.push("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06);",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", lg: "50%" },
            mb: "auto",
          }}
        >
          <FormControl error={!!errors.image} variant="standard">
            <InputLabel
              htmlFor="image"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Bild
            </InputLabel>
            <UploadInput />
          </FormControl>

          <DatePickerField
            name="startDate"
            label="Startdatum"
            control={control}
            error={errors.startDate?.message}
          />
          <DatePickerField
            name="endDate"
            label="Enddatum"
            control={control}
            error={errors.endDate?.message}
          />

          <InputField
            name="ticketNumber"
            label="Ticketanzahl"
            placeholder="2"
            register={register}
            error={errors.ticketNumber?.message}
            type="number"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputField
            name="title"
            label="Titel*"
            placeholder="Ein toller Titel"
            register={register}
            error={errors.title?.message}
          />
          <InputField
            name="shortDescription"
            label="Kurzbeschreibung"
            placeholder="Ein kürzerer Text zum Beschreiben"
            register={register}
            error={errors.shortDescription?.message}
            multiline
            minRows={4}
          />
          <InputField
            name="locationName"
            label="Location Name*"
            placeholder="Musterfirma"
            register={register}
            error={errors.locationName?.message}
          />
          <InputField
            name="street"
            label="Straße & Hausnummer*"
            placeholder="Musterstraße 1a"
            register={register}
            error={errors.street?.message}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <InputField
              name="postalCode"
              label="Postleitzahl*"
              placeholder="12345"
              register={register}
              error={errors.postalCode?.message}
            />
            <InputField
              name="city"
              label="Ort*"
              placeholder="Musterort"
              register={register}
              error={errors.city?.message}
            />
          </Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Barrierefrei"
          />
        </Box>
      </Box>
      <InputField
        name="longDescription"
        label="Beschreibung"
        placeholder="Ein längerer Text zum Beschreiben"
        register={register}
        error={errors.longDescription?.message}
        multiline
        minRows={4}
      />
      <FormControl variant="standard">
        <InputLabel
          htmlFor="tags"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          Tags
        </InputLabel>
        <TagSelect />
      </FormControl>
      <Button type="submit">Event erstellen</Button>
    </Box>
  );
}
