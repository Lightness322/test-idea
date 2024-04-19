import { formatDate } from "../utils/helpers";

import { PropsTicketItemRow } from "../types/TicketItem";

export default function TicketItemInfoRow({
  ticket,
}: Readonly<PropsTicketItemRow>) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="font-semibold text-primary">
          {ticket.origin}, {ticket.origin_name}
        </div>
        <div className="text-sm text-secondary">
          {formatDate(ticket.departure_date)}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold text-primary">
          {ticket.destination_name}, {ticket.destination}
        </div>
        <div className="text-sm text-secondary">
          {formatDate(ticket.arrival_date)}
        </div>
      </div>
    </div>
  );
}
