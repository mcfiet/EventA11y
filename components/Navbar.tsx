"use client";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  SxProps,
  Theme,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";

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
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const [jsEnabled, setJsEnabled] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Mark JS as enabled
  useEffect(() => setJsEnabled(true), []);

  // Always show menu on desktop
  useEffect(() => {
    if (isDesktop) setMenuToggled(true);
  }, [isDesktop]);

  // Focus first item on open
  useEffect(() => {
    if (menuToggled && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [menuToggled]);

  // ESC to close menu (only on mobile)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuToggled && !isDesktop) {
        setMenuToggled(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuToggled, isDesktop]);

  const headerStyles: SxProps<Theme> = {
    position: "fixed",
    top: { xs: menuToggled ? 0 : 40, md: 40 },
    left: { xs: menuToggled ? 0 : "50%", md: "50%" },
    right: { xs: menuToggled ? 0 : undefined, md: "inherit" },
    bottom: { xs: menuToggled ? 0 : undefined, md: "inherit" },
    transform: {
      xs: menuToggled ? "none" : "translateX(-50%)",
      md: "translateX(-50%)",
    },
    width: { xs: menuToggled ? "100%" : "90%", md: "90%" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 4,
    backgroundColor: theme.palette.background.paper,
    px: "50px",
    py: "20px",
    borderRadius: { xs: menuToggled ? 0 : "16px", md: "16px" },
    boxShadow: 4,
    transition: "all 0.3s ease-out",
    zIndex: 10,
  };

  return (
    <Box component="header" sx={headerStyles}>
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
        <Box component="a" href="/" sx={{ zIndex: 3 }}>
          <Box component="img" src="/logo.svg" alt="Startseite EventA11y" />
        </Box>

        {jsEnabled && (
          <Button
            aria-label={menuToggled ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuToggled}
            aria-controls="menuItems"
            onClick={() => setMenuToggled(!menuToggled)}
            sx={{
              display: { xs: "block", md: "none" },
              zIndex: 3,
            }}
          >
            {menuToggled ? <CloseIcon /> : <MenuIcon />}
          </Button>
        )}
      </Box>

      <Box
        component="nav"
        role="navigation"
        aria-label="Hauptnavigation"
        aria-labelledby="mainmenulabel"
        sx={{
          ...(jsEnabled && !menuToggled ? visuallyHidden : {}),
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
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
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {menuItems.map((item, i) => (
            <Box component="li" key={item.name}>
              <Typography
                component="a"
                href={item.href}
                {...(item.href === pathname && { "aria-current": "page" })}
                ref={i === 0 ? firstMenuItemRef : null}
                tabIndex={0}
                sx={{
                  whiteSpace: "nowrap",
                  "&:focus": {
                    outline: "2px solid",
                    outlineColor: theme.palette.primary.main,
                    outlineOffset: "4px",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
