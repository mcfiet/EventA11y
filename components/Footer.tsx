import React from "react";
import {
  Box,
  Link,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
        py: 4,
        px: 2,
        width: "100%",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 4 }}
          alignItems="center"
        >
          <Link href="/" underline="none" color="text.primary" variant="body2">
            Startseite
          </Link>
          <Link
            href="/#new-events"
            underline="none"
            color="text.primary"
            variant="body2"
          >
            Neue Events
          </Link>
          <Link
            href="/#upcoming-events"
            underline="none"
            color="text.primary"
            variant="body2"
          >
            Kommende Events
          </Link>
          <Link
            href="/login"
            underline="none"
            color="text.primary"
            variant="body2"
          >
            Login
          </Link>
          <Link
            href="/sitemap"
            underline="none"
            color="text.primary"
            variant="body2"
          >
            Sitemap
          </Link>
          <Link href="#" underline="none" color="text.primary" variant="body2">
            Impressum
          </Link>
          <Link href="#" underline="none" color="text.primary" variant="body2">
            Datenschutz
          </Link>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            aria-label="Facebook"
            href="#"
            sx={{ color: "custom.black", fontSize: 24 }}
          >
            <FacebookIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="#"
            sx={{ color: "custom.black", fontSize: 24 }}
          >
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="YouTube"
            href="#"
            sx={{ color: "custom.black", fontSize: 24 }}
          >
            <YouTubeIcon fontSize="inherit" />
          </IconButton>
        </Stack>

        <Box
          sx={{
            pt: 2,
            maxWidth: "60ch",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography component="h3" variant="h3">
            Barriere melden
          </Typography>
          <Typography>
            Wir möchten unsere Website so barrierefrei wie möglich gestalten.
            Wenn Ihnen Zugangsprobleme auffallen oder Sie
            Verbesserungsvorschläge haben, freuen wir uns über Ihre Rückmeldung.
          </Typography>
          <Button href="mailto:accessiblity@eventa11y.de" sx={{ mt: 2 }}>
            Email schreiben
          </Button>
        </Box>

        <Typography
          variant="body2"
          color="custom.black_60"
          align="center"
          sx={{ mt: 1, fontSize: "14px" }}
        >
          © Copyright 2025 - Bachelor
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
