import { useState } from "react";

import { Stops } from "../types/TicketStopsOptions";
import { ITicket } from "../types/Tickets";

export function useFilter(tickets: ITicket[]) {
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>(tickets);

  function handleFilter(stops: Stops) {
    if (stops.includes("all")) {
      setFilteredTickets(tickets);
      return;
    }

    if (stops.length === 0) {
      setFilteredTickets([]);
      return;
    }

    setFilteredTickets(
      tickets.filter((ticket) => stops.includes(ticket.stops)),
    );
  }

  return { filteredTickets, handleFilter };
}
