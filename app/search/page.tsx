"use client";
import { Suspense } from "react";
import SearchClient from "@/components/SearchClient";
import { visuallyHidden } from "@base-ui-components/react/utils";
import { Typography } from "@mui/material";

export default function SearchPageWrapper() {
  return (
    <Suspense>
      <Typography component="h1" sx={visuallyHidden}>
        Events suchen
      </Typography>
      <SearchClient />
    </Suspense>
  );
}
