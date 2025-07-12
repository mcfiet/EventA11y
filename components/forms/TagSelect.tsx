"use client";

import { Autocomplete, Chip, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const defaultOptions = [
  "Workshop",
  "Vortrag",
  "Seminar",
  "Networking",
  "Meetup",
  "Konzert",
  "Festival",
  "Webinar",
  "Hackathon",
  "Konferenz",
];

interface TagSelectProps {
  value?: string[];
  onChange: (newValue: string[]) => void;
  error?: boolean;
  helperText?: string;
}

export default function TagSelect({
  value = [],
  onChange,
  error = false,
  helperText = "",
}: TagSelectProps) {
  const [allTags, setAllTags] = useState<string[]>(defaultOptions);

  useEffect(() => {
    const stored = localStorage.getItem("customEventTags");
    if (stored) {
      const custom: string[] = JSON.parse(stored);
      setAllTags(Array.from(new Set([...defaultOptions, ...custom])));
    }
  }, []);

  return (
    <Autocomplete
      multiple
      freeSolo
      options={allTags}
      value={value}
      onChange={(_event, newValue) => {
        onChange(newValue);
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            key={option}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="Tags"
          placeholder="Wähle oder tippe neue Tags"
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
