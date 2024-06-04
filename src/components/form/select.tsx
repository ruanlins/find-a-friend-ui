import { Control, Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

export interface SelectOptionsObj {
  value: string;
  label: string;
}

interface SelectOptionsProps {
  options: { value: string; label: string }[];
  placeholder: string;
  control: Control<any>;
  name: string;
}

const style: StylesConfig = {
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "#FFF",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#FFF",
    opacity: "0.5",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#f87171",
    borderRadius: "10px",
    color: "#FFF",
    fontSize: "16px",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#ef4444",
    color: "#FFF",
  }),
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    color: "#FFF",
    backgroundColor: isSelected ? "#f87171" : "#ef4444",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    fontSize: "24x",
    fontWeight: "bold",
    backgroundColor: "transparent",
    height: "56px",
    borderRadius: "8px",
    outline: "none",
    border: "none",
  }),
};

export function SelectOptions({
  control,
  options,
  placeholder,
  name,
}: SelectOptionsProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => {
        return (
          <Select
            value={options.find((option) => option.value === value)}
            onChange={(selectedOption: SelectOptionsObj) => {
              onChange(selectedOption.value);
            }}
            options={options}
            placeholder={placeholder}
            name={name}
            styles={style}
          />
        );
      }}
    />
  );
}
