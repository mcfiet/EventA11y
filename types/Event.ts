import { Address } from "./Address";

export default interface Event {
  id: string;
  title: string;
  description: string;
  descriptionShort: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: Address;
  };
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
  ticketNumber: number;
  accessible: boolean;
}
