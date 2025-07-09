"use client";

import {
  Box,
  Button,
  Typography,
  useTheme,
  SxProps,
  Theme,
  Link,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/app/AuthContext";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Neue Events", href: "/#new-events" },
  { name: "Kommende Events", href: "/#upcoming-events" },
];

export function Navbar() {
  const { currentUser, logout } = useAuth();
  const theme = useTheme();
  const pathname = usePathname();
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const [menuToggled, setMenuToggled] = useState(false);

  // Focus first item on open
  useEffect(() => {
    if (menuToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuToggled]);

  // ESC to close menu (only on mobile)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuToggled) {
        setMenuToggled(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuToggled]);

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
    p: "20px 20px 20px 50px",
    borderRadius: { xs: menuToggled ? 0 : "16px", md: "16px" },
    boxShadow: 4,
    transition: "all 0.3s ease-out",
    zIndex: 10,
  };

  return (
    <Box component="header" id="navigation" sx={headerStyles}>
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

        <Button
          aria-label={menuToggled ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuToggled}
          aria-controls="menuItems"
          onClick={() => setMenuToggled(!menuToggled)}
          sx={{
            display: { xs: "flex", md: "none" },
            zIndex: 3,
          }}
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          ...(menuToggled
            ? {}
            : {
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }),
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
              <Link
                href={item.href}
                {...(item.href === pathname && { "aria-current": "page" })}
                ref={i === 0 ? firstMenuItemRef : null}
                tabIndex={0}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Link>
            </Box>
          ))}
          {currentUser ? (
            <>
              <Box component="li" key="createEvent">
                <Link
                  href="/event/create"
                  {...("create-event" === pathname && {
                    "aria-current": "page",
                  })}
                  tabIndex={0}
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Event erstellen
                </Link>
              </Box>
              <Box component="li" key="logout">
                <Link
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                  tabIndex={0}
                  sx={{
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </Link>
              </Box>
            </>
          ) : (
            <Box component="li" key="login">
              <Link
                href="/login"
                tabIndex={0}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Login
              </Link>
            </Box>
          )}
          <Box component="li" key="kontakt">
            <Button href="/kontakt" component="a" tabIndex={0}>
              Kontakt
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
