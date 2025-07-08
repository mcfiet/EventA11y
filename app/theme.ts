"use client";
import { Theme } from "@mui/material/styles";
import { alpha, createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
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
      black_60: "#666666",
      black_23: "#C4C4C4",
      black_54: "#757575",
      black_48: "#949494",
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
});

const theme = createTheme(baseTheme, {
  typography: {
    h2: {
      fontSize: "57px",
      [baseTheme.breakpoints.up("xs")]: {
        fontSize: "42px",
      },
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "48px",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "57px",
      },
      textTransform: "uppercase",
      fontWeight: 400,
      marginBottom: "2rem",
    },
    h3: {
      fontSize: "32px",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "28px",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "32px",
      },
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "16px",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "15px",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
      fontWeight: 400,
    },
    superLarge: {
      fontSize: "64px",
      fontWeight: "bold",
      lineHeight: 1,
      color: baseTheme.palette.primary.main,
      display: "block",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          fontSize: 14,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.secondary.main,
          border: `1px solid ${theme.palette.secondary.main}`,
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          width: "100%",
          borderRadius: "16px",
          backgroundColor: theme.palette.background.paper,
          marginBottom: theme.spacing(2),
          p: theme.spacing(8),
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "0 0 16px 0",
          },
          "&:hover": {
            borderColor: theme.palette.custom.black_60,
          },
          "&.Mui-focused": {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: "2px",
          },
          "&:first-of-type": {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
          "&:last-of-type": {
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          padding: "20px",
          fontWeight: "bold",
          fontSize: "24px",
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          padding: theme.spacing(2),
          color: theme.palette.text.primary,
          fontSize: "15px",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          fontSize: "16px",
          fontWeight: 500,
          color: theme.palette.text.primary,
          marginBottom: theme.spacing(1),
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          border: `2px solid ${theme.palette.custom.black_54}`,
          borderRadius: 8,
          fontSize: 16,
          padding: "12px",
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.text.primary,
          transition: theme.transitions.create(["border-color", "box-shadow"]),

          "&:hover": {
            borderColor: theme.palette.custom.black_60,
          },
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          },
          "&.Mui-disabled": {
            color: theme.palette.text.primary,
            borderColor: theme.palette.custom.black_23,
            opacity: 1,
          },
        }),
        input: ({ theme }: { theme: Theme }) => ({
          padding: 0, // weil Padding schon außen am root
          fontSize: 16,
          "&::placeholder": {
            color: theme.palette.custom.black_54,
            opacity: 1,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          "& .MuiOutlinedInput-notchedOutline": {},
          "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {},
            color: theme.palette.text.primary,
            opacity: 1,
          },
        }),
        input: ({ theme }: { theme: Theme }) => ({
          padding: "12px",
          fontSize: 16,
          color: theme.palette.text.primary,
          "&::placeholder": {
            color: theme.palette.custom.black_54,
            opacity: 1,
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          marginLeft: 0,
          marginTop: "4px",
          color: theme.palette.custom.black_60,
          fontSize: "12px",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          minWidth: "inherit",
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
        outlined: ({ theme }: { theme: Theme }) => ({
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
          style: ({ theme }: { theme: Theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
          }),
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          textDecoration: "none",
          color: theme.palette.custom.primary,
          padding: 4,
          borderRadius: "4px",
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
            backgroundColor: theme.palette.primary.main,
            textDecoration: "underline",
          },
          "nav &:hover": {
            textDecoration: "underline",
          },

          'nav &[aria-current="page"]': {
            fontWeight: "bold",
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => ({
        section: {
          backgroundColor: theme.palette.custom.light_blue,
          "&:first-of-type": {
            marginTop: theme.spacing(24),
          },
          [theme.breakpoints.up("xs")]: {
            padding: theme.spacing(8, 4),
          },
          [theme.breakpoints.up("md")]: {
            padding: theme.spacing(8, 8),
          },
          [theme.breakpoints.up("lg")]: {
            padding: theme.spacing(8, 16),
          },
          [theme.breakpoints.up("xl")]: {
            padding: theme.spacing(8, 32),
          },
        },
        "@font-face": [
          {
            fontFamily: "RedHatDisplay",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: "100 900",
            src: `url('/fonts/RedHatDisplay/RedHatDisplay-VariableFont_wght.ttf') format('truetype')`,
          },
        ],
        ".MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersSectionList-root.MuiPickersInputBase-sectionsContainer":
          {
            color: theme.palette.custom.black,
            opacity: 1,
          },
        ".MuiPickersSectionList-root.MuiPickersInputBase-sectionsContainer": {
          width: "100%",
          color: theme.palette.custom.black_54,
          opacity: 1,
        },
        ".MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.primary.main,
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          },
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
            backgroundColor: theme.palette.primary.main,
            textDecoration: "underline",
          },
          "nav &:hover": {
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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    // hier definierst du die neue Variante
    superLarge: React.CSSProperties;
  }
  // Optionen beim Erzeugen des Themes
  interface TypographyVariantsOptions {
    superLarge?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // damit <Typography variant="superLarge" /> erlaubt ist
    superLarge: true;
  }
}
export default theme;
