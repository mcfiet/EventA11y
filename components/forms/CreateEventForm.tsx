"use client";

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import UploadInput from "./UploadInput";
import TagSelect from "./TagSelect";
import { eventSchema, EventFormValues } from "@/lib/eventValidation";
import InputField from "@/components/forms/InputField";
import DatePickerField from "../Datepicker";
import { useEvents } from "@/app/EventsProvider";
import Event from "@/types/Event";
import FormLegend from "../FormLegend";

export default function CreateEventForm() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { addEvent } = useEvents();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      startDate: undefined,
      endDate: undefined,
      ticketNumber: 0,
      locationName: "",
      street: "",
      postalCode: "",
      city: "",
      accessible: false,
      shortDescription: "",
      longDescription: "",
      tags: [],
      image: undefined,
      imageAlt: "",
    },
  });

  const onSubmit = (data: EventFormValues) => {
    const imageUrl = "img/events/placeholder.png";
    const newEvent: Event = {
      ...data,
      id: Date.now().toString(),
      imageUrl,
      imageAlt:
        "Platzhalterbild: In dieser Anwendung können keine echten Bilder hochgeladen werden",
      location: {
        name: data.locationName,
        address: {
          street: data.street,
          postalCode: data.postalCode,
          city: data.city,
        },
      },
    };
    addEvent(newEvent);
    const stored = localStorage.getItem("customEventTags");
    const custom = stored ? JSON.parse(stored) : [];
    const newTags = data.tags?.filter((tag) => !custom.includes(tag)) || [];
    const updatedTags = [...custom, ...newTags];
    localStorage.setItem("customEventTags", JSON.stringify(updatedTags));
    enqueueSnackbar("Event temporär erstellt!", { variant: "success" });
    router.push(`/event/${newEvent.id}`);
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
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06);",
        width: "100%",
      }}
    >
      <FormLegend text="Um das Event zu erstellen, klicke den Button unten mit der Beschriftung 'Event erstellen'" />

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
          }}
        >
          <FormControl required error={!!errors.image} variant="standard">
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
              Bild*
            </InputLabel>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <>
                  <UploadInput
                    value={field.value}
                    onFileChangeAction={field.onChange}
                    error={!!errors.image}
                    helperText={errors.image?.message as string}
                  />
                  <FormHelperText error>{errors.image?.message}</FormHelperText>
                </>
              )}
            />
          </FormControl>

          <InputField<EventFormValues>
            name="imageAlt"
            label="Alternativer Text Bild"
            placeholder="Ein gut beschreibender alternativer Text"
            register={register}
            error={errors.imageAlt?.message}
            required
          />

          <DatePickerField
            control={control}
            name="startDate"
            label="Startdatum*"
            error={errors.startDate?.message}
            required
          />
          <DatePickerField
            control={control}
            name="endDate"
            label="Enddatum*"
            error={errors.endDate?.message}
            required
          />

          <InputField<EventFormValues>
            name="ticketNumber"
            label="Ticketanzahl*"
            placeholder="2"
            register={register}
            error={errors.ticketNumber?.message}
            type="number"
            required
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <InputField<EventFormValues>
            name="title"
            label="Titel*"
            placeholder="Ein toller Titel"
            register={register}
            error={errors.title?.message}
            required
          />
          <InputField<EventFormValues>
            name="shortDescription"
            label="Kurzbeschreibung*"
            placeholder="Ein kürzerer Text zum Beschreiben"
            register={register}
            error={errors.shortDescription?.message}
            multiline
            minRows={4}
            required
          />
          <InputField<EventFormValues>
            name="locationName"
            label="Location Name*"
            placeholder="Musterfirma"
            register={register}
            error={errors.locationName?.message}
            required
          />
          <InputField<EventFormValues>
            name="street"
            label="Straße & Hausnummer*"
            placeholder="Musterstraße 1a"
            register={register}
            error={errors.street?.message}
            required
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <InputField<EventFormValues>
              name="postalCode"
              label="Postleitzahl*"
              placeholder="12345"
              register={register}
              error={errors.postalCode?.message}
              required
            />
            <InputField<EventFormValues>
              name="city"
              label="Ort*"
              placeholder="Musterort"
              register={register}
              error={errors.city?.message}
              required
            />
          </Box>
          <Controller
            name="accessible"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label="Barrierefrei (optional)"
              />
            )}
          />
        </Box>
      </Box>

      <InputField<EventFormValues>
        name="longDescription"
        label="Beschreibung (optional)"
        placeholder="Ein längerer Text zum Beschreiben"
        register={register}
        error={errors.longDescription?.message}
        multiline
        minRows={4}
      />

      <FormControl variant="standard" error={!!errors.tags} fullWidth>
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
          Tags (optional)
        </InputLabel>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <>
              <TagSelect
                value={field.value}
                onChange={(newTags) => field.onChange(newTags)}
                error={!!errors.tags}
                helperText={errors.tags?.message as string}
              />
            </>
          )}
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ alignSelf: "flex-end" }}
        >
          Event erstellen
        </Button>
      </FormControl>
    </Box>
  );
}
