"use client";

import { closeSnackbar, SnackbarProvider } from "notistack";
import type { ReactNode } from "react";
import { MaterialDesignContent } from "notistack";
import { Button, styled } from "@mui/material";
import React, { useRef, useEffect } from "react";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    fontSize: "18px",
  },
}));

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
      }}
      action={(snackbarId) => <SnackbarAction snackbarId={snackbarId} />}
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

function SnackbarAction({ snackbarId }: { snackbarId: string | number }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <Button
      ref={buttonRef}
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
      aria-label="Snackbar schließen"
    >
      Schließen
    </Button>
  );
}
