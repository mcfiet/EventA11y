"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#84234f",
    },
    secondary: {
      main: "#4748c6",
    },
    background: {
      default: "#f3fafe",
    },
    text: {
      primary: "#1c1b1f",
      secondary: "#84234f",
    },
    custom: {
      dark: "#1C1B1F",
      black: "#000000",
      black_60: "rgba(0,0,0,0.6)",
      black_23: "rgba(0,0,0,0.23",
      white: "#FFFFFF",
      white_70: "rgba(255,255,255,0.7)",
      light_blue_1: "#f4f9fe",
      light_blue: "#e4eff3",
      accent: "#773150",
      primary_2: "#f5f5fe",
      primary_1: "#9997c1",
      primary: "#4d48c0",
      primary_n1: "#33325b",
      primary_n2: "#0e0a4f",
    },
  },
  typography: {
    fontFamily: ["RedHatDisplay", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "16px",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: "bold",
          padding: "12px 30px",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.dark),

          "&:hover": {
            color: theme.palette.getContrastText(theme.palette.primary.dark),
            backgroundColor: theme.palette.primary.dark,
          },
        }),
        outlined: ({ theme }) => ({
          border: `2px solid ${theme.palette.primary.main}`,
        }),
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        color: "primary",
      },
      variants: [
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
          }),
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.custom.primary,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "@font-face": [
          {
            fontFamily: "RedHatDisplay",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: "100 900",
            src: `url('/fonts/RedHatDisplay/RedHatDisplay-VariableFont_wght.ttf') format('truetype')`,
          },
        ],
        a: {
          color: theme.palette.secondary.main,
          textDecoration: "none",
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: "8px",
            borderRadius: "4px",
          },
          "&:hover:focus-visible": {
            outlineOffset: "8px",
            borderRadius: "4px",
          },
          "nav &:active": {
            color: theme.palette.background.paper,
            backgroundColor: "#024",
            textDecoration: "underline",
          },
          "nav &:hover": {
            color: theme.palette.custom.primary,
            textDecoration: "underline",
          },

          'nav &[aria-current="page"]': {
            fontWeight: "bold",
          },
        },
      }),
    },
  },
});

// Type-Erweiterung für custom-Farben
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
