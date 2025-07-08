import { Box, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard";
import Event from "@/types/Event";

type EventsProps = {
  events: Event[];
  title: string;
  emptyMessage?: string;
  id?: string;
};

export default function Events({
  events,
  title,
  emptyMessage = "No events found.",
  id,
}: EventsProps) {
  return (
    <Box component="section" id={id} sx={{ mt: 4 }}>
      <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {events.length > 0 ? (
        <Grid container spacing={6}>
          {events.map((event) => (
            <Grid size={{ xs: 12, md: 6, xl: 4 }} key={event.id}>
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                startDate={event.startDate}
                location={event.location.address.city}
                image={event.image}
                imageAlt={event.imageAlt}
                tag={event.tags[0] ?? "Event"}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ p: 4 }}>{emptyMessage}</Typography>
      )}
    </Box>
  );
}
