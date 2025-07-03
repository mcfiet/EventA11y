import { Box, Link } from "@mui/material";

export default function SkipLinksBar() {
  return (
    <Box
      component="nav"
      aria-label="Skip Links"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "background.paper",
        px: "50px",
        py: "20px",
        borderRadius: " 0 0 16px 16px",
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",

        gap: 2,
        p: 4,
        justifyContent: "center",

        transform: "translateY(-108%)",
        transition: "transform 0.2s ease-out",

        "&:focus-within": {
          transform: "translateY(0)",
        },
      }}
    >
      <Link href="#main">Zum Inhalt springen</Link>
      <Link href="#navigation">Zur Navigation springen</Link>
    </Box>
  );
}
