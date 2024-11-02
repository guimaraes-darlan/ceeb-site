import React from "react";

import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateView } from "@mui/x-date-pickers";

const DATE_FORMAT = "DD/MM/YYYY";

export const FormInputDate = ({
  name,
  control,
  label,
  views,
}: FormInputProps) => {
  const optionsViews: DateView[] = views ? views : ["year", "month", "day"];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            defaultValue={new Date()}
            label={label}
            format={DATE_FORMAT}
            views={optionsViews}
            {...field}
          />
        </LocalizationProvider>
      )}
    />
  );
};
