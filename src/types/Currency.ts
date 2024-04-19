import { currencies } from "../constants/currencies";

import { TupleToUnion } from "./Utils";

export type ICurrency = TupleToUnion<typeof currencies>;

export type ICurrenciesObj = { [key in ICurrency]: number };
