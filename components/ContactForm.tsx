"use client";

import { Box, FormControl, InputLabel, InputBase, Button } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              htmlFor="contact-firstname"
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
            <InputBase
              required
              id="contact-firstname"
              placeholder="Max"
              aria-label="Vorname"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              htmlFor="contact-lastname"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Nachname
            </InputLabel>
            <InputBase
              required
              id="contact-lastname"
              placeholder="Mustermann"
              aria-label="Nachname"
            />
          </FormControl>
        </Box>
      </Box>

      <FormControl variant="standard" fullWidth>
        <InputLabel
          htmlFor="contact-email"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          E-Mail
        </InputLabel>
        <InputBase
          required
          type="email"
          id="contact-email"
          placeholder="maxmustermann@mustermail.de"
          aria-label="E-Mail-Adresse"
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <InputLabel
          htmlFor="contact-phone"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          Telefon
        </InputLabel>
        <InputBase
          id="contact-phone"
          type="tel"
          placeholder="012345621"
          aria-label="Telefon"
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <InputLabel
          htmlFor="contact-message"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          Nachricht
        </InputLabel>
        <InputBase
          id="contact-message"
          placeholder="Schreiben Sie uns eine Nachricht"
          aria-label="Nachricht"
          multiline
          minRows={5}
          inputProps={{ style: { resize: "vertical" } }}
        />
      </FormControl>

      <Button type="submit" sx={{ alignSelf: "flex-end" }}>
        Senden
      </Button>
    </Box>
  );
}
