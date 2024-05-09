import Select from "react-select";

interface SelectQueryProps {
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
}

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
      styles={{
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "#FFF",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "#FFF",
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
        option: (baseStyles) => ({
          ...baseStyles,
          color: "#000",
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
      }}
    />
  );
}
