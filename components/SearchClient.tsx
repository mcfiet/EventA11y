"use client";

import { Box } from "@mui/material";
import Search from "@/components/Search";
import Events from "@/components/Events";
import { useEvents } from "@/app/EventsProvider";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchClient() {
  const params = useSearchParams();
  const eventQuery = params.get("q") ?? "";
  const placeQuery = params.get("place") ?? "";
  const router = useRouter();

  const { events: allEvents } = useEvents();

  const filteredEvents = allEvents.filter(
    (evt) =>
      evt.title.toLowerCase().includes(eventQuery.toLowerCase()) &&
      evt.location.address.city
        .toLowerCase()
        .includes(placeQuery.toLowerCase()),
  );

  return (
    <>
      <Box component="section" sx={{ backgroundColor: "transparent" }}>
        <Search
          defaultValues={{ eventQuery, placeQuery }}
          onSearch={({ eventQuery, placeQuery }) => {
            const p = new URLSearchParams();
            if (eventQuery) p.set("q", eventQuery);
            if (placeQuery) p.set("place", placeQuery);
            router.push(`/search?${p.toString()}`);
          }}
        />
      </Box>
      <Events
        id="search-results"
        title={`Suchergebnisse für “${eventQuery}” in “${placeQuery}”`}
        events={filteredEvents}
        emptyMessage="Keine Events gefunden."
      />
    </>
  );
}
