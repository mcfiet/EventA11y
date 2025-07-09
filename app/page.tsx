"use client";

import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import Search, { SearchParams } from "@/components/Search";
import Events from "@/components/Events";
import Faqs from "@/components/Faqs";
import { useEvents } from "./EventsProvider";

export default function Home() {
  const router = useRouter();
  const { events } = useEvents();

  const onSearch = ({ eventQuery, placeQuery }: SearchParams) => {
    const params = new URLSearchParams();
    if (eventQuery) params.set("q", eventQuery);
    if (placeQuery) params.set("place", placeQuery);
    router.push(`/search?${params.toString()}`);
  };

  const newEvents = events.filter(
    (evt) =>
      dayjs(evt.startDate).isAfter(dayjs(), "month") &&
      dayjs(evt.startDate).isBefore(dayjs().add(2, "month"), "day"),
  );
  const upcomingEvents = events.filter((evt) =>
    dayjs(evt.startDate).isAfter(dayjs().add(2, "month"), "month"),
  );

  return (
    <>
      <Box
        component="section"
        id="hero"
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/hero.png"
          alt="Event das mit einem Smartphone gefilmt wird"
          sx={{
            width: "100%",
            height: "40vh",
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
        <Search onSearch={onSearch} sx={{ width: "80%", mt: -2 }} />
      </Box>

      <Events
        id="new-events"
        title="Neue Events"
        events={newEvents}
        emptyMessage="In den nächsten 3 Monaten keine neuen Events."
      />

      <Events
        id="upcoming-events"
        title="Bevorstehende Events"
        events={upcomingEvents}
        emptyMessage="Keine langfristigen Events geplant."
      />

      <Box component="section" id="faq">
        <Faqs />
      </Box>
    </>
  );
}
