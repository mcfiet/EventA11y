import React from "react";
import { notFound } from "next/navigation";
import { events } from "@/data/Events";
import EventDetailPage from "@/components/EventDetail";
import Event from "@/types/Event";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  // Finde das Event anhand der ID/Slug
  const event = events.find((e: Event) => e.id === id);
  console.log(id);
  if (!event) {
    // Wenn nicht gefunden, 404 zurückgeben
    notFound();
  }

  return <EventDetailPage event={event!} />;
}
