import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "@/components/Navbar";
import SkipLinks from "@/components/SkipLinks";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DateProvider from "@/components/DateProvider";

export const metadata: Metadata = {
  title: "EventA11y - Book Events accessible",
  description: "EventA11y is an Event platform, thats focused on Accessibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <DateProvider>
              <CssBaseline />
              <SkipLinks />
              <Navbar />
              <Box component="main" id="main">
                {children}
              </Box>
            </DateProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
