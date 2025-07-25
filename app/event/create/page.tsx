"use client";

import CreateEventForm from "@/components/forms/CreateEventForm";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthContext";
import { visuallyHidden } from "@base-ui-components/react/utils";

export default function CreateEvent() {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, isLoading, router]);

  if (isLoading) return null;
  if (!currentUser) return null;

  return (
    <>
      <Typography component="h1" sx={visuallyHidden}>
        Event Estellungsformular
      </Typography>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h2">
          Event erstellen
        </Typography>
        <CreateEventForm />
      </Box>
    </>
  );
}
