import CreateEventForm from "@/components/CreateEventForm";
import { Box } from "@mui/material";

export default function CreateEvent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 40,
        mb: 40,
      }}
    >
      <CreateEventForm />
    </Box>
  );
}
