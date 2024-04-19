export interface PropsCheckbox {
  className?: string;
  label: string;
  isChecked: boolean;
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}
