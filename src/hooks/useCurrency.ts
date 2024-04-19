import { useEffect, useState } from "react";
import { fetchCurrencyCoefficients } from "../services/currencyService";

import { baseCurrency, currencies } from "../constants/currencies";

import { ICurrenciesObj, ICurrency } from "../types/Currency";

const initialCurrencies = currencies.reduce(
  (acc, currency) => ({ ...acc, [currency]: 1 }),
  {} as ICurrenciesObj,
);

export function useCurrency() {
  const [currencyCoefficients, setCurrencyCoefficients] =
    useState<ICurrenciesObj>(initialCurrencies);

  const [selectedCurrency, setSelectedCurrency] =
    useState<ICurrency>(baseCurrency);

  const priceCoefficient = currencyCoefficients[selectedCurrency];

  useEffect(() => {
    getCurrencies();
  }, []);

  async function getCurrencies() {
    try {
      const data = await fetchCurrencyCoefficients();

      if (data) {
        setCurrencyCoefficients(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectCurrency(currency: ICurrency) {
    setSelectedCurrency(currency);
  }

  return { selectedCurrency, priceCoefficient, handleSelectCurrency };
}
