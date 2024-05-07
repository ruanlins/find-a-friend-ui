import Logo from "../assets/logo-simplified.svg?react";
import LogOut from "../assets/logout.svg?react";

export function Header() {
  return (
    <header className="flex justify-around gap-10 rounded-xl bg-blue-950 p-4 text-white sm:min-w-[650px]">
      <div className="flex items-center">
        <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500">
          <Logo className="h-7 w-7" />
        </div>
        <div>
          <p className="text-3xl font-bold">Anjos de 4 Patas</p>
          <span>Rua Italo Lorandi, Centro, Charqueada - SP</span>
        </div>
      </div>
      <div>
        <button className="rounded-xl bg-blue-900 p-5">
          <LogOut />
        </button>
      </div>
    </header>
  );
}
