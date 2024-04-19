import { ICurrency } from "./Currency";
import { Stops } from "./TicketStopsOptions";

export interface PropsTicketFilters {
  handleFilter: (stops: Stops) => void;
  selectedCurrency: ICurrency;
  handleSelectCurrency: (currency: ICurrency) => void;
}

export type PropsTicketCurrencies = Pick<
  PropsTicketFilters,
  "selectedCurrency" | "handleSelectCurrency"
>;
