import { ICurrency } from "./Currency";
import { ITicket } from "./Tickets";

export interface PropsTicketList {
  filteredTickets: ITicket[];
  currency: ICurrency;
  priceCoefficient: number;
}
