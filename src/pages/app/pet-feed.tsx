import { PetFeedCard } from "@/components/pet-feed/pet-feed-card";
import Logo from "@/assets/logo-simplified.svg?react";
import Search from "@/assets/search.svg?react";
import { allStates } from "@/utils/allStates";
import { SelectQuery } from "@/components/form/select-query";
import {
  petAge,
  petEnergy,
  petIndependence,
  petSpace,
} from "@/utils/petOptions";

export function PetFeed() {
  return (
    <div className="grid w-full grid-cols-[390px_auto] gap-32 bg-red-100">
      <div className="space-y-20 bg-red-500 p-14">
        <div className="space-y-8">
          <Logo className="h-12 w-12" />
          <div className="flex items-center gap-5">
            <SelectQuery
              name="state"
              options={allStates}
              placeholder="Estado"
            />
            <button className="rounded-2xl bg-yellow-500 p-4">
              <Search />
            </button>
          </div>
        </div>
        <div className="space-y-8 text-white">
          <p className="mb-8 text-xl font-bold">Filtros</p>
          <div>
            <span className="mb-1 block text-xs">Idade</span>
            <SelectQuery placeholder="Idade" name="age" options={petAge} />
          </div>
          <div>
            <span className="mb-1 block text-xs">Nível de Energia</span>
            <SelectQuery
              placeholder="Energia"
              name="energy"
              options={petEnergy}
            />
          </div>
          <div>
            <span className="mb-1 block text-xs">Espaço</span>
            <SelectQuery placeholder="Espaço" name="space" options={petSpace} />
          </div>
          <div>
            <span className="mb-1 block text-xs">Independência</span>
            <SelectQuery
              placeholder="Independência"
              name="independence"
              options={petIndependence}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div>
          <p className="mb-5 text-blue-950">
            Encontre <span className="font-bold">NUMBER amigos</span> perto de
            você
          </p>
        </div>
        <ul className="grid grid-cols-[repeat(3,270px)] justify-items-center gap-8">
          {Array.from({ length: 20 }, (_, i) => (
            <PetFeedCard key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
