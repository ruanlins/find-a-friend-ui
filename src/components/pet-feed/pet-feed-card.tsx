import Logo from "@/assets/logo-simplified.svg?react";

export function PetFeedCard() {
  return (
    <div className="group relative flex h-[210px] w-[270px] cursor-pointer flex-col items-center justify-between rounded-2xl bg-white p-1 transition-colors hover:bg-blue-950">
      <img
        className="h-[135px] w-[270px] rounded-2xl object-cover object-top"
        src="/chiquinha.jpeg"
        alt=""
      />
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 rounded-2xl bg-white p-1 transition-colors group-hover:bg-blue-950">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500">
          <Logo className="h-7 w-7" />
        </div>
      </div>
      <p className="mb-1 text-lg font-bold text-blue-950 transition-colors group-hover:text-white">
        Chiquinha
      </p>
    </div>
  );
}
