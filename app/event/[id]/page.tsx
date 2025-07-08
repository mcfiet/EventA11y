import { notFound } from "next/navigation";
import { events } from "@/data/Events";
import EventDetailPage from "@/components/EventDetail";
import Event from "@/types/Event";

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

  return <EventDetailPage event={event!} />;
}
