import { Control, Controller } from "react-hook-form";
import Select from "react-select";

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
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#e2e8f0",
                height: "56px",
                borderRadius: "8px",
                color: "#000",
                fontSize: "16px",
                outline: "none",
                borderColor: state.isFocused ? "#172554" : "transparent",
              }),
            }}
          />
        );
      }}
    />
  );
}
