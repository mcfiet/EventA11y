"use client";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import theme from "@/app/theme";

export default function CustomDatePickers() {
  const [start, setStart] = useState<Dayjs | null>(null);
  const [end, setEnd] = useState<Dayjs | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
      gap={{ xs: 2, lg: 4 }}
    >
      <Box
        sx={{
          width: {
            md: "100%",
            lg: "50%",
          },
        }}
      >
        <Typography variant="body1" fontWeight={500} mb={1}>
          Veranstaltungsstart
        </Typography>
        <DatePicker
          value={start}
          onChange={(newValue) => setStart(newValue)}
          slotProps={{
            textField: {
              sx: {
                width: "100%",
                ".MuiPickersOutlinedInput-notchedOutline": {
                  borderRadius: "10px",
                  border: (theme) =>
                    `2px solid ${theme.palette.custom.black_54}`,
                  p: 2,
                },
              },
            },
            openPickerButton: {
              sx: {
                color: theme.palette.primary.main,
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          width: {
            md: "100%",
            lg: "50%",
          },
        }}
      >
        <Typography variant="body1" fontWeight={500} mb={1}>
          Veranstaltungsende
        </Typography>
        <DatePicker
          value={end}
          onChange={(newValue) => setStart(newValue)}
          slotProps={{
            textField: {
              sx: {
                width: "100%",
                ".MuiPickersOutlinedInput-notchedOutline": {
                  borderRadius: "10px",
                  border: (theme) =>
                    `2px solid ${theme.palette.custom.black_54}`,
                  p: 2,
                },
              },
            },
            openPickerButton: {
              sx: {
                color: theme.palette.primary.main,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
