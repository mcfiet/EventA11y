"use client";

import { closeSnackbar, SnackbarProvider } from "notistack";
import type { ReactNode } from "react";
import { MaterialDesignContent } from "notistack";
import { Button, styled } from "@mui/material";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    fontSize: "18px",
  },
}));
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SnackbarProvider
      action={(snackbarId) => (
        <Button
          sx={{
            backgroundColor: "background.paper",
            color: "error.main",
            py: 1,
            px: 1,
            "&:hover": {
              backgroundColor: "background.default",
              color: "error.dark",
            },
          }}
          onClick={() => closeSnackbar(snackbarId)}
        >
          Schließen
        </Button>
      )}
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
