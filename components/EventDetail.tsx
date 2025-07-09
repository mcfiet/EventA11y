import React from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MusicNote } from "@mui/icons-material";
import Event from "../types/Event";
import theme from "@/app/theme";

interface EventDetailPageProps {
  event: Event;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ event }) => {
  const {
    title,
    description,
    descriptionShort,
    startDate,
    location,
    image,
    imageAlt,
    tags,
    ticketNumber,
    accessible,
  } = event;

  const dateObj = new Date(startDate);
  const day = dateObj.getDate();
  const month = dateObj
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const time = dateObj.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formatDate = (iso: string) => {
    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "background.default" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={`/${image}`}
            alt={imageAlt}
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "60vh",
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              width: {
                xs: "90%",
                md: "inherit",
              },
              backgroundColor: "background.paper",
              borderRadius: 4,
              p: 4,
              gap: 4,
              ml: {
                xs: 0,
                md: -20,
              },

              mt: {
                xs: -20,
                md: 0,
              },
            }}
          >
            <Box sx={{ height: "auto", width: { xs: "100%", md: "80%" } }}>
              <Typography variant="h2" component="h1">
                {title}
              </Typography>
              <Typography variant="body1">{descriptionShort}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: { xs: "100%", md: "20%" },
              }}
            >
              <Chip
                label={event.tags[0] ?? "Event"}
                sx={{
                  height: "auto",
                  backgroundColor: "background.paper",
                  color: "primary.main",
                  fontWeight: "bold",
                  px: 1.5,
                  py: 1,
                  borderRadius: 1.5,
                  boxShadow: `0 1px 4px rgba(0,0,0,0.2)`,
                  border: "none",
                }}
                icon={<MusicNote color="primary" />}
                size="small"
              />
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 2,
                  boxShadow: `0 1px 4px rgba(0,0,0,0.2)`,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Typography fontWeight="bold" variant="superLarge">
                  {day}
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    fontSize: 32,
                    textTransform: "uppercase",
                    color: "primary.main",
                  }}
                >
                  {month}
                </Typography>
              </Box>

              <Stack direction="column" spacing={2} alignItems="center" mb={1}>
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  width="100%"
                >
                  <AccessTimeIcon
                    sx={{ fontSize: 16, color: "secondary.main" }}
                  />
                  <Typography variant="body1" sx={{ color: "secondary.main" }}>
                    {time} Uhr
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  width="100%"
                >
                  <LocationOnIcon
                    sx={{ fontSize: 16, color: "secondary.main" }}
                  />
                  <Typography variant="body1" sx={{ color: "secondary.main" }}>
                    {location.address.city}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  width="100%"
                >
                  {accessible && (
                    <Chip
                      icon={<AccessibilityNewIcon />}
                      label="Barrierefrei"
                    />
                  )}
                </Stack>
              </Stack>
              <Button>Buchen</Button>
              <Typography variant="body2" color="primary">
                Noch {ticketNumber} verfügbar
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ pb: "30rem" }}>
        <Typography component="h2" variant="h2">
          Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Typography variant="body1">{description}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "30%" },
              flexDirection: "column",
              gap: 2,
              backgroundColor: "background.paper",
              p: 2,
              boxShadow: 1,
              position: "sticky",
              top: 180,
              borderRadius: 4,
            }}
          >
            <Box
              component="img"
              src="/img/maps.png"
              alt="Standort des Events auf der Karte"
              sx={{ height: 300, objectFit: "cover", borderRadius: 2 }}
            />
            <Button>Auf Google Maps ansehen</Button>
            <Box display="flex" gap={1}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EventDetailPage;
