import { LightningBoltIcon } from "@radix-ui/react-icons";

export function EnergyCard() {
  return (
    <div className="basis-full space-y-2 rounded-2xl border-[1px] border-slate-300 p-4">
      <div className="flex">
        <LightningBoltIcon className="h-5 w-[18px]" />
        <LightningBoltIcon className="h-5 w-[18px]" />
        <LightningBoltIcon className="h-5 w-[18px]" />
        <LightningBoltIcon className="h-5 w-[18px]" />
        <LightningBoltIcon className="h-5 w-[18px]" />
      </div>
      <p className="font-semibold">Muita Energia</p>
    </div>
  );
}
