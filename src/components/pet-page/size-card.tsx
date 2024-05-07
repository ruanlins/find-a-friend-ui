import { RulerHorizontalIcon } from "@radix-ui/react-icons";

export function SizeCard() {
  return (
    <div className="basis-full space-y-2 rounded-2xl border-[1px] border-slate-300 p-4">
      <div className="flex space-x-1">
        <RulerHorizontalIcon className="h-5 w-[18px]" />
        <RulerHorizontalIcon className="h-5 w-[18px]" />
        <RulerHorizontalIcon className="h-5 w-[18px]" />
      </div>
      <p className="font-semibold">Muito Grande</p>
    </div>
  );
}
