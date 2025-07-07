"use client";

import * as React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import UploadInput from "./UploadInput";
import CustomDatePickers from "./Datepicker";
import TagSelect from "./TagSelect";

export default function CreateEventForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06);",
      }}
    >
      {/* <FormControl disabled variant="standard"> */}
      {/*   <InputLabel */}
      {/*     htmlFor="bootstrap-input" */}
      {/*     shrink */}
      {/*     sx={{ */}
      {/*       fontSize: "16px", */}
      {/*       fontWeight: 500, */}
      {/*       transform: "none", */}
      {/*       position: "static", */}
      {/*     }} */}
      {/*   > */}
      {/*     Titel* */}
      {/*   </InputLabel> */}
      {/*   <InputBase placeholder="Max Mustermann" id="bootstrap-input" /> */}
      {/*   <FormHelperText>Disabled</FormHelperText> */}
      {/* </FormControl> */}
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="image"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Bild
            </InputLabel>
            <UploadInput />
          </FormControl>
          <FormControl variant="standard">
            <CustomDatePickers />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="ticket-number"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Ticketanzahl*
            </InputLabel>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <InputBase type="number" placeholder="2" id="ticket-number" />
              <Typography>Tickets</Typography>
            </Box>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="title"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Titel*
            </InputLabel>
            <InputBase placeholder="Ein toller Titel" id="title" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="short-description"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Kurzbeschreibung
            </InputLabel>
            <InputBase
              placeholder="Ein kürzerer Text zum Beschreiben"
              multiline
              minRows={4}
              inputProps={{ style: { resize: "vertical" } }}
              id="short-description"
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="location-name"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Location Name*
            </InputLabel>
            <InputBase placeholder="Musterfirma" id="location-name" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="address"
              shrink
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                transform: "none",
                position: "static",
              }}
            >
              Straße & Hausnummer*
            </InputLabel>
            <InputBase placeholder="Musterstraße 1a" id="address" />
          </FormControl>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl variant="standard">
              <InputLabel
                htmlFor="zipCode"
                shrink
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  transform: "none",
                  position: "static",
                }}
              >
                Postleitzahl*
              </InputLabel>
              <InputBase placeholder="12345" id="zipCode" />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel
                htmlFor="city"
                shrink
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  transform: "none",
                  position: "static",
                }}
              >
                Ort*
              </InputLabel>
              <InputBase placeholder="Musterort" id="city" />
            </FormControl>
          </Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Barrierefrei"
          />
        </Box>
      </Box>
      <FormControl variant="standard">
        <InputLabel
          htmlFor="long-description"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          Beschreibung
        </InputLabel>
        <InputBase
          placeholder="Ein längerer Text zum Beschreiben"
          multiline
          minRows={4}
          inputProps={{ style: { resize: "vertical" } }}
          id="long-description"
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel
          htmlFor="tags"
          shrink
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            transform: "none",
            position: "static",
          }}
        >
          Tags
        </InputLabel>
        <TagSelect />
      </FormControl>
      {/* <FormControl error variant="standard"> */}
      {/*   <InputLabel */}
      {/*     htmlFor="bootstrap-input" */}
      {/*     shrink */}
      {/*     sx={{ */}
      {/*       fontSize: "16px", */}
      {/*       fontWeight: 500, */}
      {/*       transform: "none", */}
      {/*       position: "static", */}
      {/*     }} */}
      {/*   > */}
      {/*     Titel* */}
      {/*   </InputLabel> */}
      {/*   <InputBase */}
      {/*     id="component-error" */}
      {/*     placeholder="Max Mustermann" */}
      {/*     aria-describedby="component-error-text" */}
      {/*   /> */}
      {/*   <FormHelperText id="component-error-text">Error</FormHelperText> */}
      {/* </FormControl> */}
    </Box>
  );
}
