import { notFound } from "next/navigation";
import { events } from "@/data/Events";
import Event from "@/types/Event";
import BookingForm from "@/components/forms/BookingForm";
import { Box, Typography } from "@mui/material";
import { visuallyHidden } from "@base-ui-components/react/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e: Event) => e.id === id);
  if (!event) {
    notFound();
  }
  return (
    <>
      <Typography component="h1" sx={visuallyHidden}>
        Event Buchungsprozess
      </Typography>
      <Box component="section">
        <Typography component="h2" variant="h2">
          Event buchen
        </Typography>
        <BookingForm eventTitle={event.title} />
      </Box>
    </>
  );
}
