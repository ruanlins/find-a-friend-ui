import Logo from "@/assets/logo-simplified.svg?react";
import Search from "@/assets/search.svg?react";
import { allStates } from "@/utils/allStates";
import {
  petAge,
  petEnergy,
  petIndependence,
  petSpace,
} from "@/utils/petOptions";
import { SelectRadix } from "../form/select";

export function PetFeedFilter() {
  return (
    <>
      <div className="space-y-8">
        <Logo className="h-12 w-12" />
        <div className="flex items-center gap-5">
          <SelectRadix options={allStates} placeholder="Estado..." />
          <button className="rounded-2xl bg-yellow-500 p-4">
            <Search />
          </button>
        </div>
      </div>
      <div className="space-y-8 text-white">
        <p className="mb-8 text-xl font-bold">Filtros</p>
        <div>
          <span className="mb-1 block text-xs">Idade</span>
          <SelectRadix placeholder="Idade..." options={petAge} />
        </div>
        <div>
          <span className="mb-1 block text-xs">Nível de Energia</span>
          <SelectRadix placeholder="Energia..." options={petEnergy} />
        </div>
        <div>
          <span className="mb-1 block text-xs">Espaço</span>
          <SelectRadix placeholder="Espaço..." options={petSpace} />
        </div>
        <div>
          <span className="mb-1 block text-xs">Independência</span>
          <SelectRadix
            placeholder="Independência..."
            options={petIndependence}
          />
        </div>
      </div>
    </>
  );
}
