import { Address } from "./Address";
import type { EventFormValues } from "@/lib/eventValidation";

export default interface Event {
  id: string;
  imageUrl: string;
  title: string;
  longDescription?: string;
  shortDescription: string;
  startDate: Date;
  endDate: Date;
  location: {
    name: string;
    address: Address;
  };
  imageAlt: string;
  tags?: string[];
  ticketNumber: number;
  accessible: boolean;
}
