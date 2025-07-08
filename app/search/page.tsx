"use client";
import { Box } from "@mui/material";

import Search from "@/components/Search";
import Events from "@/components/Events";
import { events as allEvents } from "@/data/Events";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; place?: string }>;
}) {
  const eventQuery = (await searchParams).q ?? "";
  const placeQuery = (await searchParams).place ?? "";

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
