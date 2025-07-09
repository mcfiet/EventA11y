"use client";
import { Suspense } from "react";
import YourSearchClientComponent from "@/components/SearchClient";

export default function SearchPageWrapper() {
  return (
    <Suspense>
      <YourSearchClientComponent />
    </Suspense>
  );
}
