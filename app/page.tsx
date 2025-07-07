import EventCard from "@/components/EventCard";
import Faqs from "@/components/Faqs";
import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box component="section" id="new-events">
        <Typography component="h2" variant="h2">
          Neue Events
        </Typography>
        <Grid container spacing={6}>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
        </Grid>
      </Box>
      <Box component="section" id="upcoming-events">
        <Typography component="h2" variant="h2">
          Bevorstehende Events
        </Typography>
        <Grid container spacing={6}>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
          <Grid size={4}>
            <EventCard />
          </Grid>
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
