import { PropsTicketItem } from "../types/TicketItem";

import TicketItemTimeRow from "./TIcketItemTimeRow";
import TicketItemInfoRow from "./TicketItemInfoRow";
import TicketItemBuy from "./TicketItemBuy";

export default function TicketItem({
  ticket,
  currency,
  priceCoefficient,
}: Readonly<PropsTicketItem>) {
  const price = ticket.price * priceCoefficient;

  return (
    <li className="grid max-h-52 grid-cols-[1fr,_2fr] rounded-md bg-primary shadow-md">
      <TicketItemBuy currency={currency} price={price} />
      <div className="px-8 py-6">
        <TicketItemTimeRow ticket={ticket} />
        <TicketItemInfoRow ticket={ticket} />
      </div>
    </li>
  );
}
