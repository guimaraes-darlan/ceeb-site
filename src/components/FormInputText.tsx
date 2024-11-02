import { useController } from "react-hook-form";

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
  defaultValue = "",
}: FormInputProps) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue,
  });

  return (
    <TextField
      id={name}
      helperText={error ? error.message : null}
      error={invalid}
      fullWidth
      label={label}
      variant="outlined"
      required={required}
      disabled={disabled}
      type={type}
      inputProps={number ? { inputMode: "numeric", pattern: "[0-9]*" } : {}}
      {...field}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};
