import BookingForm from "@/components/BookingForm";
import React from "react";

const BookingPage = () => {
  const eventTitle = "Dein cooles Event";
  const maxTickets = 5;

  return (
    <div>
      <BookingForm eventTitle={eventTitle} maxTickets={maxTickets} />
    </div>
  );
};

export default BookingPage;
