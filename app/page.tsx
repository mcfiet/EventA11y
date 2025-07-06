import Faqs from "@/components/Faqs";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 40,
        mb: 40,
        p: 20,
      }}
    >
      <Faqs />
    </Box>
  );
}
