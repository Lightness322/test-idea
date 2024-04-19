import { twMerge } from "tailwind-merge";

import { currencies } from "../constants/currencies";

import { ICurrency } from "../types/Currency";
import { PropsTicketCurrencies } from "../types/TicketFilters";

export default function TicketCurrencies({
  handleSelectCurrency,
  selectedCurrency,
}: Readonly<PropsTicketCurrencies>) {
  function isActive(currency: ICurrency) {
    return selectedCurrency === currency;
  }

  return (
    <div className="flex flex-col gap-3 p-6">
      <h3 className="font-semibold text-primary">ВАЛЮТА</h3>
      <div className="flex">
        {currencies.map((currency) => (
          <button
            key={currency}
            onClick={() => handleSelectCurrency(currency)}
            className={twMerge(
              "grow border border-primary p-2 font-semibold text-brand first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md",
              isActive(currency) && "border-brand bg-brand text-tertiary",
              !isActive(currency) && "hover:border-brand hover:bg-brand-hover",
            )}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
