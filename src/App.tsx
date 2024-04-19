import { useFilter } from "./hooks/useFilter";
import { useCurrency } from "./hooks/useCurrency";

import data from "./data/tickets.json";

import { ITicket } from "./types/Tickets";

import TicketFilters from "./components/TicketFilters";
import TicketList from "./components/TicketList";

import airplaneLogoUrl from "./assets/airplane-logo.svg";

const tickets: ITicket[] = data.tickets;

function App() {
  const { filteredTickets, handleFilter } = useFilter(tickets);

  const { selectedCurrency, handleSelectCurrency, priceCoefficient } =
    useCurrency();

  return (
    <div className="bg-page-tint">
      <div className="flex h-48 items-center justify-center">
        <img
          className="w-h-14 h-14"
          src={airplaneLogoUrl}
          alt="airplane logo"
        />
      </div>
      <div className="m-auto min-h-screen max-w-[1200px] p-3">
        <div className="grid grid-cols-[1fr,_3fr] gap-6">
          <TicketFilters
            handleFilter={handleFilter}
            selectedCurrency={selectedCurrency}
            handleSelectCurrency={handleSelectCurrency}
          />
          <TicketList
            filteredTickets={filteredTickets}
            currency={selectedCurrency}
            priceCoefficient={priceCoefficient}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
