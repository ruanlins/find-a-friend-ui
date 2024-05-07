import { GroupIcon } from "@radix-ui/react-icons";

export function SpaceCard() {
  return (
    <div className="basis-full space-y-2  rounded-2xl border-[1px] border-slate-300 p-4">
      <div className="flex">
        <GroupIcon className="h-5 w-[18px]" />
      </div>
      <p className="font-semibold">Espaço Amplo</p>
    </div>
  );
}
