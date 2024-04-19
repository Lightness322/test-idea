import { ICurrency } from "./Currency";
import { ITicket } from "./Tickets";

export interface PropsTicketItem {
  ticket: ITicket;
  currency: ICurrency;
  priceCoefficient: number;
}
export type PropsTicketItemRow = Pick<PropsTicketItem, "ticket">;

export interface PropsTicketItemBuy {
  price: number;
  currency: ICurrency;
}
