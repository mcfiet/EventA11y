"use client";

import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const tagOptions = [
  { label: "Design" },
  { label: "Marketing" },
  { label: "Entwicklung" },
  { label: "UX" },
  { label: "Forschung" },
];

export default function TagSelect() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Autocomplete
      id="tags"
      multiple // wenn du Mehrfachauswahl willst, sonst entfernen
      options={tagOptions.map((option) => option.label)}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Tags auswählen oder erstellen"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
