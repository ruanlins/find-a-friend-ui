import Select, { StylesConfig } from "react-select";

interface SelectQueryProps {
  options: { value: string; label: string }[];
  placeholder: string;
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
  option: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    color: "#FFF",
    backgroundColor: isFocused ? "#f87171" : "",
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

export function SelectQuery({ options, placeholder, name }: SelectQueryProps) {
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      className="w-full"
      name={name}
      placeholder={placeholder}
      styles={style}
    />
  );
}
