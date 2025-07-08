"use client";

import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";

export default function Login() {
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
        Login
      </Typography>
      <Box
        component="form"
        sx={{
          width: { xs: "100%", md: "70%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: (theme) => theme.palette.background.paper,
          p: 4,
          borderRadius: "16px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06);",
        }}
      >
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
        <Link href="/registration">Kein Account? Jetzt registrieren.</Link>
        <Button sx={{ ml: "auto" }}>Einloggen</Button>
      </Box>
    </Box>
  );
}
