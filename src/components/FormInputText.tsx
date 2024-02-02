import { Controller } from "react-hook-form";

import { TextField } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({
  name,
  control,
  label,
  required,
  disabled,
  number = false,
  type = "text",
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          id={name}
          helperText={error ? error.message : null}
          error={!!error}
          fullWidth
          label={label}
          variant="outlined"
          required={required}
          disabled={disabled}
          type={type}
          {...field}
          inputProps={number ? { inputMode: "numeric", pattern: "[0-9]*" } : {}}
        />
      )}
    />
  );
};
