"use client";

import { Autocomplete, TextField } from "@mui/material";

const tagOptions = ["Design", "Marketing", "Entwicklung", "UX", "Forschung"];

interface TagSelectProps {
  value: string[] | undefined;
  onChange: (event: any, newValue: string[]) => void;
  error?: boolean;
  helperText?: string;
}

export default function TagSelect({
  value,
  onChange,
  error = false,
  helperText = "",
}: TagSelectProps) {
  return (
    <Autocomplete
      multiple
      options={tagOptions}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Tags auswählen oder erstellen"
          variant="outlined"
          fullWidth
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
