import { useState } from "react";

import { PropsTicketCheckbox } from "../types/TicketCheckbox";

import CheckBox from "./UI/Checkbox";

export default function TicketCheckbox({
  stopOption,
  handleFilter,
  selectedStops,
  handleSelect,
}: Readonly<PropsTicketCheckbox>) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const { label: stopLabel, value: stopValue } = stopOption;

  function isChecked(value: typeof stopValue) {
    return selectedStops.includes(value);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: typeof stopValue,
  ) {
    if (!e.target.checked) {
      const updatedStops = selectedStops.filter(
        (selectedStop) => selectedStop !== value,
      );

      handleSelect(updatedStops);
      handleFilter(updatedStops);
    } else {
      const updatedStops = [...selectedStops, value];

      handleSelect(updatedStops);
      handleFilter(updatedStops);
    }
  }

  function handleEnter() {
    setIsHover(true);
  }

  function handleLeave() {
    setIsHover(false);
  }

  function handleClick() {
    handleSelect([stopValue]);
    handleFilter([stopValue]);
  }

  return (
    <li
      key={stopLabel}
      className="flex items-center justify-between text-primary hover:bg-brand-hover"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <CheckBox
        className="grow py-2 pl-6"
        label={stopLabel}
        isChecked={isChecked(stopValue)}
        onChange={(e) => handleChange(e!, stopValue)}
      />
      {isHover && (
        <button
          className="pr-6 text-sm font-semibold text-brand hover:underline"
          onClick={handleClick}
        >
          ТОЛЬКО
        </button>
      )}
    </li>
  );
}
