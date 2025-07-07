import EventCard from "@/components/EventCard";
import Faqs from "@/components/Faqs";
import Search from "@/components/Search";
import { Box, Grid, Typography } from "@mui/material";
import { events } from "../data/events";
import dayjs from "dayjs";

export default function Home() {
  const today = new Date();
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
        />
        <Search
          sx={{
            width: "80%",
            mt: -2,
          }}
        />
      </Box>
      <Box component="section" id="new-events">
        <Typography component="h2" variant="h2">
          Neue Events
        </Typography>
        <Grid container spacing={6}>
          {events.map(
            (event) =>
              dayjs(event.startDate).isAfter(dayjs(), "month") &&
              dayjs(event.startDate).isBefore(
                dayjs().add(3, "month"),
                "day",
              ) && (
                <Grid size={4} key={event.id}>
                  <EventCard
                    key={event.id}
                    title={event.title}
                    startDate={event.startDate}
                    location={event.location.address.city}
                    image={event.image}
                    imageAlt={event.imageAlt}
                    tag={event.tags[0] ?? "Event"}
                  />
                </Grid>
              ),
          )}
        </Grid>
      </Box>
      <Box component="section" id="upcoming-events">
        <Typography component="h2" variant="h2">
          Bevorstehende Events
        </Typography>
        <Grid container spacing={6}>
          {events.map(
            (event) =>
              dayjs(event.startDate).isAfter(
                dayjs().add(2, "month"),
                "month",
              ) && (
                <Grid size={4}>
                  <EventCard
                    key={event.id}
                    title={event.title}
                    startDate={event.startDate}
                    location={event.location.address.city}
                    image={event.image}
                    imageAlt={event.imageAlt}
                    tag={event.tags[0] ?? "Event"}
                  />
                </Grid>
              ),
          )}
        </Grid>
      </Box>
      <Box component="section" id="faq">
        <Typography component="h2" variant="h2">
          FAQs
        </Typography>
        <Faqs />
      </Box>
    </>
  );
}
