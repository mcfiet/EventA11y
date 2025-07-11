import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

interface FormLegendProps {
  text?: string;
}

export default function FormLegend({ text }: FormLegendProps) {
  return (
    <Box
      sx={{
        mb: 2,
        p: 2,
        border: 1,
        borderColor: "grey.300",
        bgcolor: "grey.100",
        borderRadius: 1,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Legende:
      </Typography>
      <List>
        <ListItem disableGutters>
          <Typography
            component="span"
            sx={{ color: "error.main", fontWeight: "bold", mr: 1 }}
          >
            *
          </Typography>
          <Typography component="span">Pflichtfeld</Typography>
        </ListItem>
        <ListItem disableGutters>
          <Typography
            component="span"
            sx={{ fontStyle: "italic", color: "text.secondary", mr: 1 }}
          >
            (optional)
          </Typography>
          <Typography component="span">Optionales Feld</Typography>
        </ListItem>
      </List>
      <Typography>{text}</Typography>
    </Box>
  );
}
