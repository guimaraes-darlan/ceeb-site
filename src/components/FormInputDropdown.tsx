import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  required,
  options,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          select
          fullWidth
          variant="outlined"
          label={label}
          defaultValue={""}
          helperText={error ? error.message : null}
          error={!!error}
          required={required}
          disabled={disabled}
          {...field}
        >
          {options}
        </TextField>
      )}
    />
  );
};
