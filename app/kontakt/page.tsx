import ContactForm from "@/components/forms/ContactForm";
import { Box, Typography, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Box
      component="section"
      aria-labelledby="contact-heading"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 8,
      }}
    >
      <Typography
        component="h2"
        id="contact-heading"
        variant="h2"
        sx={{ mb: 4 }}
      >
        Kontakt
      </Typography>

      <Grid container spacing={4} sx={{ width: "100%", alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src="/img/maps.png"
            alt="Standort auf Karte"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
