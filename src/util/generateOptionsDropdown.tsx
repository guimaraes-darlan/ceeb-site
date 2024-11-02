import { MenuItem } from "@mui/material";

export type SelectOptionsProps = {
  label: string;
  value: string | number;
};

export const generateOptionsDropdown = (
  options: SelectOptionsProps[],
  labelOptionDefault?: string,
  valueOptionDefault?: any
) => {
  const items: JSX.Element[] = [];

  if (labelOptionDefault) {
    items.push(
      <MenuItem
        key={labelOptionDefault + "-" + Math.random()}
        value={valueOptionDefault || ""}
      >
        {labelOptionDefault}
      </MenuItem>
    );

    if (options) {
      options.forEach((option) =>
        items.push(
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        )
      );
    }
  }

  return items;
};
