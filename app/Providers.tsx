"use client";

import { SnackbarProvider } from "notistack";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={1000000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      {children}
    </SnackbarProvider>
  );
}
