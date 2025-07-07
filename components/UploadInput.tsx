"use client";

import { Box, Typography, IconButton, Button, Stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, useRef, useState } from "react";

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

export default function UploadField() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl(null);
    inputRef.current!.value = "";
  };

  return (
    <Box>
      {file ? (
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
              {file.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {(file.size / 1024).toFixed(1)} KB
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
    </Box>
  );
}
