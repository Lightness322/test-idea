import { ITicketStopOption, Stops } from "./TicketStopsOptions";

export interface PropsTicketCheckbox {
  stopOption: ITicketStopOption;
  handleFilter: (stops: Stops) => void;
  selectedStops: Stops;
  handleSelect: (stops: Stops) => void;
}
