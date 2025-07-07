"use client";

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  InputBase,
  Button,
  Link,
} from "@mui/material";

export default function Registration() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h2" variant="h2">
        Registrieren
      </Typography>
      <Box
        component="form"
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: (theme) => theme.palette.background.paper,
          p: 4,
          borderRadius: "16px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06);",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="first-name"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Vorname
            </InputLabel>
            <InputBase required placeholder="Max" id="first-name" />
          </FormControl>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="name"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Name
            </InputLabel>
            <InputBase required placeholder="Mustermann" id="name" />
          </FormControl>
        </Box>
        <FormControl variant="standard">
          <InputLabel
            htmlFor="username"
            shrink
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              transform: "none",
              position: "static",
            }}
          >
            Name
          </InputLabel>
          <InputBase required placeholder="Dein Benutzername" id="username" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel
            htmlFor="password"
            shrink
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              transform: "none",
              position: "static",
            }}
          >
            Passwort
          </InputLabel>
          <InputBase required type="password" id="password" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel
            htmlFor="password-again"
            shrink
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              transform: "none",
              position: "static",
            }}
          >
            Passwort wiederholen
          </InputLabel>
          <InputBase required type="password" id="password-again" />
        </FormControl>
        <Link href="/login">Du hast schon ein Account? Jetzt einloggen.</Link>
        <Button sx={{ ml: "auto" }}>Registrieren</Button>
      </Box>
    </Box>
  );
}
