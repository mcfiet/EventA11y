import { notFound } from "next/navigation";
import { events } from "@/data/Events";
import Event from "@/types/Event";
import BookingForm from "@/components/BookingForm";
import { Box } from "@mui/material";

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
    <Box component="section">
      <BookingForm eventTitle={event.title} maxTickets={event.ticketNumber} />
    </Box>
  );
}
