import { currencySymbol, formatPrice } from "../utils/helpers";

import { PropsTicketItemBuy } from "../types/TicketItem";

import logoUrl from "../assets/logo.svg";

export default function TicketItemBuy({
  price,
  currency,
}: Readonly<PropsTicketItemBuy>) {
  return (
    <div className="flex flex-col items-center gap-6 border-r border-primary p-6">
      <img className="max-w-32" src={logoUrl} alt="company logo" />
      <button className="w-full rounded-md bg-buy-btn p-1 text-lg text-white shadow-md hover:bg-buy-btn-hover">
        Купить
        <br />
        за {formatPrice(price)} {currencySymbol(currency)}
      </button>
    </div>
  );
}
