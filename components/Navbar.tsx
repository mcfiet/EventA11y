"use client";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/#events" },
  { name: "Login", href: "/login" },
  { name: "Event erstellen", href: "/create-event" },
  { name: "Kontakt", href: "/contact" },
];

export function Navbar() {
  const theme = useTheme();
  const pathname = usePathname();
  const [menuToggled, setMenuToggled] = useState(false);
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: {
          xs: menuToggled ? 0 : 40,
          md: 40,
        },
        left: {
          xs: menuToggled ? 0 : "50%",
          md: "50%",
        },
        right: {
          xs: menuToggled ? 0 : undefined,
          md: undefined,
        },
        bottom: {
          xs: menuToggled ? 0 : undefined,
          md: undefined,
        },
        transform: {
          xs: menuToggled ? "none" : "translateX(-50%)",
          md: "translateX(-50%)",
        },
        width: {
          xs: menuToggled ? "100%" : "90%",
          md: "90%",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: 4,
        backgroundColor: theme.palette.background.paper,
        px: "50px",
        py: "20px",
        borderRadius: menuToggled ? 0 : "16px",
        boxShadow: 4,
        transition: "all 0.3s ease-out",
      }}
    >
      <Typography component="h1" sx={visuallyHidden}>
        EventA11y - barrierefrei Events buchen
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="a"
          href="/"
          sx={{
            zIndex: 3,
          }}
        >
          <Box component="img" src="/logo.svg" alt="Startseite EventA11y" />
        </Box>
        <Button
          aria-label={menuToggled ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuToggled}
          aria-controls="menuItems"
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
            zIndex: 3,
          }}
          onClick={() => setMenuToggled(!menuToggled)}
        >
          {menuToggled ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Box>
      <Box
        component="nav"
        role="navigation"
        aria-label="Hauptnavigation"
        aria-labelledby="mainmenulabel"
        sx={{
          display: {
            xs: menuToggled ? "block" : "none",
            md: "flex",
          },
        }}
      >
        <Typography component="h2" id="mainmenulabel" sx={visuallyHidden}>
          Main Menu
        </Typography>
        <Box
          id="menuItems"
          component="ul"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            gap: 4,
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {menuItems.map((menuItem) => (
            <Box component="li" key={menuItem.name}>
              <Typography
                component="a"
                href={menuItem.href}
                {...(menuItem.href == pathname && { "aria-current": "page" })}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {menuItem.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
