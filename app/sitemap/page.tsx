import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@base-ui-components/react/utils";

const pages = [
  { label: "Startseite", path: "/" },
  { label: "Event erstellen", path: "/event/create" },
  { label: "Suche", path: "/search" },
  { label: "Kontakt", path: "/kontakt" },
  { label: "Login", path: "/login" },
  { label: "Registrierung", path: "/registration" },
];

export default function Sitemap() {
  return (
    <Box component="main">
      <Box component="section">
        <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 4 }}>
          <Typography component="h1" sx={visuallyHidden}>
            Sitemap
          </Typography>
          <Typography component="h2" variant="h2">
            Übersicht der Seiten
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 2 }}>
            Diese Seite gibt Ihnen eine Übersicht über die wichtigsten Bereiche
            der Anwendung.
          </Typography>
          <nav aria-label="Sitemap">
            <List>
              {pages.map((page) => (
                <ListItem key={page.path} disablePadding>
                  <Link href={page.path} passHref legacyBehavior>
                    <a style={{ width: "100%", textDecoration: "none" }}>
                      <ListItemText
                        primary={page.label}
                        sx={{
                          color: "primary.main",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      />
                    </a>
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
