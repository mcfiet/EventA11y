"use client";

import { useState, FormEvent, useEffect } from "react";
import { visuallyHidden } from "@base-ui-components/react/utils";
import { LocationPin, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  SxProps,
  Theme,
} from "@mui/material";

export type SearchParams = {
  eventQuery: string;
  placeQuery: string;
};

type SearchProps = {
  onSearch: (params: SearchParams) => void;
  defaultValues?: Partial<SearchParams>;
  sx?: SxProps<Theme>;
};

export default function Search({ onSearch, defaultValues, sx }: SearchProps) {
  const [eventQuery, setEventQuery] = useState("");
  const [placeQuery, setPlaceQuery] = useState("");

  useEffect(() => {
    if (defaultValues?.eventQuery != null) {
      setEventQuery(defaultValues.eventQuery);
    }
    if (defaultValues?.placeQuery != null) {
      setPlaceQuery(defaultValues.placeQuery);
    }
  }, [defaultValues]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch({ eventQuery, placeQuery });
  };

  return (
    <Box
      component="form"
      role="search"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 4,
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        boxShadow: 2,
        ...sx,
      }}
    >
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel htmlFor="search-event" shrink sx={visuallyHidden}>
          Suche nach Events
        </InputLabel>
        <InputBase
          placeholder="Suche nach Events"
          type="search"
          id="search-event"
          value={eventQuery}
          onChange={(e) => setEventQuery(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel htmlFor="search-place" shrink sx={visuallyHidden}>
          Stadt, Ort
        </InputLabel>
        <InputBase
          placeholder="Stadt, Ort"
          type="search"
          id="search-place"
          value={placeQuery}
          onChange={(e) => setPlaceQuery(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <LocationPin color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" startIcon={<SearchOutlined />} variant="contained">
        Search
      </Button>
    </Box>
  );
}
