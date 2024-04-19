import { twMerge } from "tailwind-merge";

import { PropsCheckbox } from "../../types/UI/Checkbox";

export default function Checkbox({
  className,
  label,
  isChecked,
  onChange,
}: Readonly<PropsCheckbox>) {
  return (
    <label className={twMerge("flex cursor-pointer gap-3", className ?? "")}>
      <span
        className={twMerge(
          "relative h-6 w-6 rounded-md border border-primary",
          isChecked &&
            "border-brand bg-brand-hover before:absolute before:left-[5px] before:top-[5px] before:h-3 before:w-3 before:bg-[url('/check.svg')] before:bg-cover before:object-cover",
        )}
      >
        <span className="absolute left-0 top-0 h-full w-full"></span>
        <input
          className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          name="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
      </span>
      <span>{label}</span>
    </label>
  );
}
