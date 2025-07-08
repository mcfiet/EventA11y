import CreateEventForm from "@/components/CreateEventForm";
import { Box } from "@mui/material";

export default function CreateEvent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateEventForm />
    </Box>
  );
}
