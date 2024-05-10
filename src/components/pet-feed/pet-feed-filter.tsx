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

export function PetFeedFilter() {
  return (
    <>
      <div className="space-y-8">
        <Logo className="h-12 w-12" />
        <div className="flex items-center gap-5">
          <SelectQuery
            name="state"
            options={allStates}
            placeholder="Estado..."
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
          <SelectQuery placeholder="Idade..." name="age" options={petAge} />
        </div>
        <div>
          <span className="mb-1 block text-xs">Nível de Energia</span>
          <SelectQuery
            placeholder="Energia..."
            name="energy"
            options={petEnergy}
          />
        </div>
        <div>
          <span className="mb-1 block text-xs">Espaço</span>
          <SelectQuery
            placeholder="Espaço..."
            name="space"
            options={petSpace}
          />
        </div>
        <div>
          <span className="mb-1 block text-xs">Independência</span>
          <SelectQuery
            placeholder="Independência..."
            name="independence"
            options={petIndependence}
          />
        </div>
      </div>
    </>
  );
}
