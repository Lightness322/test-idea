import { useStops } from "../hooks/useStops";

import { PropsTicketFilters } from "../types/TicketFilters";

import TicketCurrencies from "./TicketCurrencies";
import TicketCheckbox from "./TicketCheckbox";

export default function TicketFilters({
  handleFilter,
  selectedCurrency,
  handleSelectCurrency,
}: Readonly<PropsTicketFilters>) {
  const { stopsOptions, selectedStops, handleSelectStop } = useStops();

  return (
    <div className="flex flex-col gap-1 self-start rounded-md bg-primary pb-6 shadow-md">
      <TicketCurrencies
        selectedCurrency={selectedCurrency}
        handleSelectCurrency={handleSelectCurrency}
      />
      <div className="flex flex-col gap-3">
        <h3 className="px-6 font-semibold text-primary">
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </h3>
        <ul className="flex flex-col">
          {stopsOptions.map((stopOption) => (
            <TicketCheckbox
              key={stopOption.label}
              stopOption={stopOption}
              selectedStops={selectedStops}
              handleFilter={handleFilter}
              handleSelect={handleSelectStop}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
