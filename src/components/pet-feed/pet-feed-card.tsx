import Logo from "@/assets/logo-simplified.svg?react";

export function PetFeedCard() {
  return (
    <div className="relative flex h-[210px] flex-col items-center justify-between rounded-2xl bg-white p-1">
      <img
        className="h-[135px] w-[270px] rounded-2xl object-cover object-top"
        src="../../../public/Chquinha.jpeg"
        alt=""
      />
      <div className="absolute bottom-9 left-1/2  -translate-x-1/2 rounded-2xl bg-white p-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500">
          <Logo className="h-7 w-7" />
        </div>
      </div>
      <p className="mb-1 text-lg font-bold text-blue-950">Chiquinha</p>
    </div>
  );
}
