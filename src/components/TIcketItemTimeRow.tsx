import { formatStopsName, formatTime } from "../utils/helpers";

import { PropsTicketItemRow } from "../types/TicketItem";

import airplaneIconUrl from "../assets/airplane.svg";

export default function TicketItemTimeRow({
  ticket,
}: Readonly<PropsTicketItemRow>) {
  return (
    <div className="flex justify-between">
      <div className="min-w-24 text-4xl text-primary">
        {formatTime(ticket.departure_time)}
      </div>
      <div className="grow">
        <div className="text-center text-sm text-secondary">
          {ticket.stops} {formatStopsName(ticket.stops)}
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[1px] max-w-40 grow bg-secondary" />
          <img className="h-6 w-6" src={airplaneIconUrl} alt="airplane icon" />
        </div>
      </div>
      <div className="min-w-24 text-end text-4xl text-primary">
        {formatTime(ticket.arrival_time)}
      </div>
    </div>
  );
}
