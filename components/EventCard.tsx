"use client";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MusicNote } from "@mui/icons-material";

export default function EventCard() {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: theme.palette.custom.white,
        boxShadow: 3,
      }}
    >
      {/* Image & Badge */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image="/event-card.png" // Hier ggf. durch dein Bild ersetzen
          alt="Event Cover"
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        {/* Category Badge */}
        {/* Date Box */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Chip
            label="Musical"
            sx={{
              height: "auto",
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              px: 1.5,
              py: 1,
              borderRadius: 1.5,
            }}
            icon={<MusicNote color="primary" />}
            size="small"
          />
          <Box
            sx={{
              backgroundColor: theme.palette.custom.white,
              borderRadius: 2,
              boxShadow: `0 1px 4px rgba(0,0,0,0.2)`,
              textAlign: "center",
              p: 1,
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                lineHeight: 1,
                fontSize: 64,
                color: theme.palette.primary.main,
              }}
            >
              25
            </Typography>
            <Typography
              variant="caption"
              fontWeight="bold"
              sx={{
                lineHeight: "20px",
                fontSize: 32,
                textTransform: "uppercase",
                color: theme.palette.primary.main,
              }}
            >
              JAN
            </Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ pt: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
          <Stack direction="row" spacing={0.5} alignItems="center" mb={1}>
            <AccessTimeIcon
              sx={{ fontSize: 16, color: theme.palette.secondary.main }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              19 Uhr
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center" mb={1}>
            <LocationOnIcon
              sx={{ fontSize: 16, color: theme.palette.secondary.main }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
            >
              Düsseldorf
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h3" component="h3" fontWeight="bold" gutterBottom>
          Some Event title that is very long
        </Typography>

        <Button fullWidth variant="contained" color="primary">
          Buchen
        </Button>
      </CardContent>
    </Card>
  );
}
