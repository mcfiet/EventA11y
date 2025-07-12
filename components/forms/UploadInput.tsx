"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

const UploadContainer = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.custom.black_54}`,
  borderRadius: 8,
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "pointer",
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(["border-color", "box-shadow"], {
    duration: theme.transitions.duration.short,
  }),

  "&:hover": {
    borderColor: theme.palette.primary.main,
  },

  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  },
}));

export interface UploadInputProps {
  value: File | null | undefined;
  onFileChangeAction: (file: File | null) => void;
  error?: boolean;
  helperText?: string;
}

export default function UploadInput({
  value,
  onFileChangeAction,
  error = false,
  helperText = "",
}: UploadInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // whenever `value` changes, (re)generate preview URL
  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setPreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [value]);

  const handleClick = () => inputRef.current?.click();
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onFileChangeAction(file);
  };
  const handleReset = () => {
    onFileChangeAction(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Box>
      {value ? (
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: 2,
            position: "relative",
          }}
        >
          {previewUrl && (
            <Box
              component="img"
              src={previewUrl}
              alt="Preview"
              sx={{
                width: 64,
                height: 64,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          )}
          <Stack>
            <Typography variant="body2" fontWeight={500}>
              {value.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {(value.size / 1024).toFixed(1)} KB
            </Typography>
          </Stack>
          <IconButton
            onClick={handleReset}
            sx={{ ml: "auto" }}
            aria-label="Datei entfernen"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      ) : (
        <UploadContainer
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Datei hochladen"
        >
          <CloudUploadIcon fontSize="small" sx={{ mb: 1 }} />
          <Typography variant="body2">
            <strong>Datei hinzufügen</strong> oder über Drag & Drop einfügen
          </Typography>
        </UploadContainer>
      )}

      <input
        id="image"
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

      {error && (
        <Typography variant="caption" color="error" sx={{ mt: 1 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
}
