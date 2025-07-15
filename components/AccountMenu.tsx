"use client";

import { useAuth } from "@/app/AuthContext";
import {
  PersonAdd,
  Settings,
  Logout,
  AddLocationAlt,
  Login,
} from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function AccountMenu() {
  const router = useRouter();
  const { currentUser, logout } = useAuth();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goTo = (path: string) => {
    setAnchorEl(null);
    router.push(path);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Admin Optionen">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="Your Profile Picture"
              src={currentUser ? "/img/3d_avatar.svg" : undefined}
              sx={{ width: 48, height: 48 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {currentUser
          ? [
              <MenuItem
                key="create-event"
                onClick={() => goTo("/event/create")}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                <ListItemIcon>
                  <AddLocationAlt fontSize="small" />
                </ListItemIcon>
                Event erstellen
              </MenuItem>,
              <MenuItem
                key="logout"
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
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>,
            ]
          : [
              <MenuItem
                key="login"
                onClick={() => goTo("/login")}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                <ListItemIcon>
                  <Login fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>,
              <MenuItem
                key="registration"
                onClick={() => goTo("/registration")}
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Registrieren
              </MenuItem>,
            ]}
      </Menu>
    </>
  );
}
