"use client";

import { SnackbarProvider } from "notistack";
import type { ReactNode } from "react";
import { MaterialDesignContent } from "notistack";
import { styled } from "@mui/material";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    fontSize: "18px",
  },
}));
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={1000000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      style={{
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
