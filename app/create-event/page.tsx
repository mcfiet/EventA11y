"use client";

import CreateEventForm from "@/components/CreateEventForm";
import { Box } from "@mui/material";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateEvent() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login"); // redirect to login if not logged in
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateEventForm />
    </Box>
  );
}
