import { EnergyCard } from "@/components/pet-page/energy-card";
import { SizeCard } from "@/components/pet-page/size-card";
import { SpaceCard } from "@/components/pet-page/space-card";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo-simplified.svg?react";
import WhatsApp from "../../assets/whatsapp.svg?react";

export function PetInfo() {
  const { petId } = useParams();

  return (
    <div className="mt-10 max-w-[700px] rounded-xl bg-white">
      <div className="space-y-8">
        <img
          src="../../../public/Chquinha.jpeg"
          className="h-[300px] w-[700px] rounded-t-xl object-cover object-top"
          alt=""
        />
        <div className="flex justify-evenly">
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="../../../public/Chquinha.jpeg"
            className="h-[80px] w-[80px] rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="space-y-10 p-8 text-blue-950">
        <div>
          <h1 className="text-[54px] font-bold">Chiquinha</h1>
          <p className="font-semibold">
            Uma cachorra muito energética, brincalhona e carinhosa. Adora correr
            atrás de passarinhos, brincar com bolinha ou qualquer outra coisa
            que você jogue pra ela. Também adora dar uma volta.
          </p>
        </div>
        <div className="flex justify-around gap-3">
          <EnergyCard />
          <SpaceCard />
          <SizeCard />
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500">
            <Logo className="h-7 w-7" />
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Anjos de 4 Patas</p>
              <p className="font-semibold">
                Rua Italo Lorandi, 456, Centro, Charqueada - SP
              </p>
            </div>
            <div className="flex w-fit gap-3 rounded-xl bg-slate-100 px-8 py-3">
              <WhatsApp />
              19 99999-9999
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
