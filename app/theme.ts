"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4748C6",
    },
    secondary: {
      main: "#84234F",
    },
    // Eigene Farbgruppen
    custom: {
      blue1: "#1E88E5",
      blue2: "#1565C0",
      green1: "#43A047",
      green2: "#2E7D32",
      // bis zu 20 Farben
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      [key: string]: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      [key: string]: string;
    };
  }
}
export default theme;
