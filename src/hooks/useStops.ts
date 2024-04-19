import { useState } from "react";

import { formatStopsName } from "../utils/helpers";
import data from "../data/tickets.json";

import { ITicketStopOption, Stops } from "../types/TicketStopsOptions";
import { ITicket } from "../types/Tickets";

const tickets: ITicket[] = data.tickets;

export function useStops() {
  const [selectedStops, setSelectedStops] = useState<Stops>(["all"]);

  const stopsOptions: Array<ITicketStopOption> = [
    { label: "Все", value: "all" },
    ...Array.from(new Set(tickets.map((ticket) => ticket.stops)))
      .sort()
      .map((stop) => ({
        label: `${stop === 0 ? "Без" : stop} ${formatStopsName(stop).toLowerCase()}`,
        value: stop,
      })),
  ];

  function handleSelectStop(stops: Stops) {
    setSelectedStops(stops);
  }

  return { stopsOptions, selectedStops, handleSelectStop };
}
