import { DateView } from "@mui/x-date-pickers";

export interface SelectOptionProps {
  label: string;
  value: string | number;
}

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  required: boolean;
  setValue?: any;
  disabled?: boolean;
  options?: JSX.Element[];
  number?: boolean;
  type?: string;
  defaultValue?: string;
  views?: DateView[];
}
