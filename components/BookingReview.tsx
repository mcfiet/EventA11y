"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { BookingFormValues } from "@/lib/bookingValidation";

interface BookingReviewProps {
  data: BookingFormValues;
  eventTitle: string;
  onEdit: () => void;
  onConfirm: () => void;
}

const BookingReview: React.FC<BookingReviewProps> = ({
  data,
  eventTitle,
  onEdit,
  onConfirm,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: 2,
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Buchung überprüfen
      </Typography>

      <Typography variant="body1" mb={1}>
        <strong>Event:</strong> {eventTitle}
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Name:</strong> {data.firstName} {data.lastName}
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>E-Mail:</strong> {data.email}
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Tickets:</strong> {data.ticketCount}
      </Typography>
      {data.message && (
        <Typography variant="body1" mb={1}>
          <strong>Nachricht:</strong> {data.message}
        </Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={onEdit}>
          Zurück
        </Button>
        <Button variant="contained" onClick={onConfirm}>
          Buchung bestätigen
        </Button>
      </Box>
    </Box>
  );
};

export default BookingReview;
