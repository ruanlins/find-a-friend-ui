import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import { allStates } from '@/utils/allStates';

interface StateSelectProps {
  children: React.ReactNode;
}

export function StateSelect() {
  const SelectItem = React.forwardRef<HTMLInputElement, StateSelectProps>(
    ({ children, ...props }, forwardedRef) => {
      return (
        <Select.Item
          {...props}
          ref={forwardedRef}>
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="absolute right-[-2px] mt-[3px] w-[25px] inline-flex items-center justify-center">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    },
  );

  return (
    <Select.Root>
      <Select.Trigger
        className="flex items-center w-fit bg-slate-200 p-2 rounded-lg text-blue-950"
        aria-label="Estados">
        <Select.Value
          className="placeholder:"
          placeholder="Indique seu Estado"
        />
        <Select.Icon className="text-blue-950 ml-1">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="left-4 w-14 max-h-[200px] overflow-hidden bg-slate-200 rounded-lg shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport className="p-2">
            <Select.Group>
              {allStates.map((state) => (
                <SelectItem
                  key={state}
                  value={state}>
                  {state}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
