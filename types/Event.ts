export interface Event {
  id: string;
  title: string;
  description: string;
  descriptionShort: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
  ticketNumber: number;
}
