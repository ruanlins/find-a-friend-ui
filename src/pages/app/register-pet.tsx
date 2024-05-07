import Button from "@/components/form/button";
import { Input } from "@/components/form/input";
import { SelectOptions } from "@/components/form/select";
import { petAge, petEnergy, petSize, petSpace } from "@/utils/petOptions";
import { Separator } from "@radix-ui/react-separator";
import { useForm } from "react-hook-form";

export function RegisterPet() {
  function handleRegister(data: unknown) {
    console.log(data);
  }

  const { register, handleSubmit, control } = useForm();
  return (
    <div className="w-[650px] rounded-xl bg-white p-10">
      <div>
        <h1 className="mb-3 text-4xl font-bold text-blue-950">
          Adicione um Pet
        </h1>
        <Separator className="mb-5 h-[1px] w-full bg-blue-950 opacity-70" />
      </div>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <Input type="text" name="name" label="Nome" register={register} />
        <div className="flex flex-col">
          <label className="block font-semibold text-blue-950" htmlFor="about">
            Sobre
            <span className="ml-10 text-xs font-medium text-slate-500">
              Máximo de 300 caracteres
            </span>
          </label>
          <textarea
            {...register("about")}
            className="h-56 resize-none rounded-lg bg-slate-200 p-2 outline-none focus:ring-2 focus:ring-blue-950"
            name="about"
            id="about"
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-950">Idade</label>
          <SelectOptions
            control={control}
            name="age"
            placeholder="Informe a idade do pet"
            options={petAge}
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-950">Porte</label>
          <SelectOptions
            control={control}
            name="size"
            placeholder="Informe o porte do pet"
            options={petSize}
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-950">Energia</label>
          <SelectOptions
            control={control}
            name="energy"
            placeholder="Informe a energia do pet"
            options={petEnergy}
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-950">
            Nível de independência
            <span className="ml-10 inline-block text-xs font-medium text-slate-500 ">
              O quanto ele precisa de companhia
            </span>
          </label>
          <SelectOptions
            control={control}
            name="independence"
            placeholder="Informe a independência do pet"
            options={petEnergy}
          />
        </div>
        <div>
          <label className="block font-semibold text-blue-950 ">Ambiente</label>
          <SelectOptions
            control={control}
            name="space"
            placeholder="Informe o espaço necessário"
            options={petSpace}
          />
        </div>
        <Button className="h-16 w-full rounded-xl bg-yellow-400 font-bold text-blue-950 ">
          Confirmar
        </Button>
      </form>
    </div>
  );
}
