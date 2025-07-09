"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { events as initialEvents } from "@/data/Events";
import type Event from "@/types/Event";

interface EventsContextType {
  events: Event[];
  addEvent: (event: Event) => void;
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

const STORAGE_KEY = "events";

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Event[];
          return parsed.map((ev) => ({
            ...ev,
            startDate: new Date(ev.startDate),
            endDate: new Date(ev.endDate),
          }));
        } catch {
          return initialEvents;
        }
      }
    }
    return initialEvents;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const addEvent = (event: Event) => setEvents((prev) => [...prev, event]);

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const ctx = useContext(EventsContext);
  if (!ctx) throw new Error("useEvents must be used within an EventsProvider");
  return ctx;
};
