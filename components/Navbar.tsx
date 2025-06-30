"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { usePathname } from "next/navigation";

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
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 40,
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,

        px: 4,
        py: 2,
        mx: 10,
        borderRadius: 6,
        boxShadow: 4,
      }}
    >
      <Box component="a" href="/">
        <Box component="img" src="/logo.svg" alt="Startseite EventA11y" />
      </Box>
      <Box component="nav" aria-labelledby="mainmenulabel">
        <Typography component="h2" id="mainmenulabel" sx={visuallyHidden}>
          Main Menu
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            listStyle: "none",
            m: 0,
          }}
        >
          {menuItems.map((menuItem) => (
            <Box component="li" key={menuItem.name}>
              <Typography
                component="a"
                href={menuItem.href}
                {...(menuItem.href == pathname && { "aria-current": "page" })}
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
