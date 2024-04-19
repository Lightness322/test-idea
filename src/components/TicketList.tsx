import { PropsTicketList } from "../types/TicketList";

import TicketItem from "./TicketItem";

export default function TicketList({
  filteredTickets,
  currency,
  priceCoefficient,
}: Readonly<PropsTicketList>) {
  if (filteredTickets.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-md bg-primary shadow-md">
        <h3 className="text-2XL font-semibold text-primary">
          Нет билетов, которые соответствуют выбранным параметрам
        </h3>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-6">
      {filteredTickets.map((ticket) => (
        <TicketItem
          key={ticket.arrival_time + ticket.departure_time + ticket.price}
          ticket={ticket}
          currency={currency}
          priceCoefficient={priceCoefficient}
        />
      ))}
    </ul>
  );
}
