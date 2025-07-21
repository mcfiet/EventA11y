import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  List,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { useAuth } from "@/app/AuthContext";
import { AddLocationAlt, Logout, Login, PersonAdd } from "@mui/icons-material";

export default function MenuListComposition() {
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Admin Optionen">
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar
                alt="Your Profile Picture"
                src={currentUser ? "/img/3d_avatar.svg" : undefined}
                sx={{ width: 48, height: 48 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 2 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <List
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    {currentUser
                      ? [
                          <MenuItem
                            key="create-event"
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/event/create">
                              <ListItemIcon>
                                <AddLocationAlt fontSize="small" />
                              </ListItemIcon>
                              Event erstellen
                            </Link>
                          </MenuItem>,
                          <MenuItem
                            key="logout"
                            onClick={() => {
                              logout();
                              window.location.href = "/";
                            }}
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
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/login">
                              <ListItemIcon>
                                <Login fontSize="small" />
                              </ListItemIcon>
                              Login
                            </Link>
                          </MenuItem>,
                          <MenuItem
                            key="registration"
                            sx={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href="/registration">
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Registrieren
                            </Link>
                          </MenuItem>,
                        ]}
                  </List>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
