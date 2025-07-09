"use client";
import { Box } from "@mui/material";
import Search from "@/components/Search";
import Events from "@/components/Events";
import { useEvents } from "@/app/EventsProvider";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  // Nutze next/navigation, um URL-Query-Parameter im Client auszulesen:
  const params = useSearchParams();
  const eventQuery = params.get("q") ?? "";
  const placeQuery = params.get("place") ?? "";

  // Events aus Context (LocalStorage/Provider)
  const { events: allEvents } = useEvents();

  // Filter-Logik wie gehabt
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
            window.location.href = `/search?${p.toString()}`;
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
