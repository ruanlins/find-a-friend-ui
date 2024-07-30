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
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const petsFilterSchema = z.object({
  estado: z.string().optional(),
  idade: z.string().optional(),
  energia: z.string().optional(),
  espaco: z.string().optional(),
  independencia: z.string().optional(),
});

type PetsFilterSchema = z.infer<typeof petsFilterSchema>;

export function PetFeedFilter() {
  const { control, handleSubmit } = useForm<PetsFilterSchema>({
    resolver: zodResolver(petsFilterSchema),
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const estado = searchParams.get("state");

  return (
    <>
      <div className="space-y-8 text-white">
        <Logo className="h-12 w-12" />
        <div className="flex items-center gap-5">
          <Controller
            control={control}
            name="estado"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  onValueChange={onChange}
                  value={value}
                  options={allStates}
                  placeholder="Estado..."
                />
              );
            }}
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
          <Controller
            control={control}
            name="idade"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  onValueChange={onChange}
                  value={value}
                  options={petAge}
                  placeholder="Idade..."
                />
              );
            }}
          />
        </div>
        <div>
          <span className="mb-1 block text-xs">Nível de Energia</span>
          <Controller
            control={control}
            name="energia"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  onValueChange={onChange}
                  value={value}
                  options={petEnergy}
                  placeholder="Nível de Energia..."
                />
              );
            }}
          />
        </div>
        <div>
          <span className="mb-1 block text-xs">Espaço</span>
          <Controller
            control={control}
            name="espaco"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  onValueChange={onChange}
                  value={value}
                  options={petSpace}
                  placeholder="Espaço..."
                />
              );
            }}
          />
        </div>
        <div>
          <span className="mb-1 block text-xs">Independência</span>
          <Controller
            control={control}
            name="independencia"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  onValueChange={onChange}
                  value={value}
                  options={petIndependence}
                  placeholder="Independência..."
                />
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
