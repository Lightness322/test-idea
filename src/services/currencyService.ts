import { baseCurrency, currencies } from "../constants/currencies";

import { ICurrenciesObj } from "../types/Currency";

const currenciesString = currencies.join(",");

export async function fetchCurrencyCoefficients() {
  try {
    const response = await fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KCuekRq8P9MS0J6AM8bplJayfLNWUdPo9i4WV91n&base_currency=${baseCurrency}&currencies=${currenciesString}`,
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data: { data: ICurrenciesObj } = await response.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
}
