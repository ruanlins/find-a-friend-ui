import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

interface SelectOptionsProps {
  children?: React.ReactNode;
  options: string[];
  placeholder: string;
  ariaLabel: string;
}

export function SelectOptions({
  options,
  placeholder,
  ariaLabel,
}: SelectOptionsProps) {
  const SelectItem = React.forwardRef<HTMLInputElement, SelectOptionsProps>(
    ({ children, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className="border-b-[1px] border-slate-500/20 p-1"
          ref={forwardedRef}
          {...props}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="absolute right-[-2px] mt-[3px] inline-flex w-[25px] items-center justify-center">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    },
  );

  return (
    <Select.Root>
      <Select.Trigger
        className="flex h-14 w-full items-center rounded-lg bg-slate-200 p-2 text-blue-950"
        aria-label={ariaLabel}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="ml-1 text-blue-950">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="left-4 max-h-[200px] w-[300px] overflow-hidden rounded-lg bg-slate-200 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <Select.Viewport>
            <Select.Group className="p-2">
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
