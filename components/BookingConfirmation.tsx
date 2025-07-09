"use client";

import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/navigation";

interface BookingConfirmationProps {
  eventTitle: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  ticketCount?: number;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  eventTitle,
  firstName,
  lastName,
  email,
  ticketCount,
}) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        p: 4,
        borderRadius: "16px",
        boxShadow: 2,
        maxWidth: 500,
        margin: "3rem auto",
        textAlign: "center",
      }}
    >
      <CheckCircleOutlineIcon
        color="secondary"
        sx={{ fontSize: 60, mb: 2 }}
        aria-hidden="true"
      />
      <Typography variant="h3" fontWeight="bold" mb={2} color="primary">
        Buchung erfolgreich!
      </Typography>
      <Typography variant="body1" mb={2}>
        {firstName && lastName
          ? `Vielen Dank, ${firstName} ${lastName}, für deine Buchung!`
          : "Vielen Dank für deine Buchung!"}
      </Typography>
      <Typography variant="body1" mb={1}>
        Deine Tickets für <b>{eventTitle}</b>
        {ticketCount
          ? ` (${ticketCount} Ticket${ticketCount > 1 ? "s" : ""})`
          : ""}{" "}
        sind reserviert.
      </Typography>
      {email && (
        <Typography variant="body2" color="text.secondary" mb={2}>
          Eine Bestätigung wurde an <b>{email}</b> gesendet.
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => router.push("/")}
      >
        Zurück zur Startseite
      </Button>
    </Box>
  );
};

export default BookingConfirmation;
