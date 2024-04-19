import { TupleToUnion } from "./Utils";

export interface ITicketStopOption {
  label: string;
  value: TupleToUnion<Stops>;
}

export type Stops = Array<number | "all">;
