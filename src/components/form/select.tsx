import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

interface SelectProps {
  options: { value: string; label: string }[];
  placeholder: string;
  onValueChange: () => void;
  value: string | undefined;
}

export function SelectRadix({
  options,
  placeholder,
  onValueChange,
}: SelectProps) {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="h-14 w-48 rounded-lg bg-red-400 ">
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <ChevronDownIcon className="inline-block size-7 pb-1" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          align="center"
          className="w-48 cursor-pointer rounded-lg border-[1px] border-white bg-red-400 text-center text-white"
          position="popper"
        >
          <Select.ScrollUpButton />
          <Select.Viewport className="max-h-48 space-y-1">
            {options.map((option) => {
              return (
                <Select.Item
                  className="rounded-md hover:bg-red-500 "
                  key={option.value}
                  value={option.value}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon className="inline-block size-6 pb-1" />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
