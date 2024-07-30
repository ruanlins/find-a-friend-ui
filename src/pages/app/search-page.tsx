import Logo from "@/assets/logo.svg?react";
import Dogs from "@/assets/dogs.svg?react";
import Search from "@/assets/search.svg?react";
import { allStates } from "@/utils/allStates";
import { SelectRadix } from "@/components/form/select";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/form/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const searchSchema = z.object({
  state: z.string(),
});

type SearchSchema = z.infer<typeof searchSchema>;

export function SearchPage() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  function handleSearch(data: SearchSchema) {
    navigate(`/feed?state=${data.state.toLocaleLowerCase()}`);
  }

  return (
    <section className="flex h-screen w-screen items-center  justify-center bg-red-500 p-20 text-white">
      <div className="grid h-full max-w-[1000px] grid-cols-2 items-center">
        <Logo />
        <h1 className="col-start-1 row-start-2 text-7xl font-extrabold">
          Leve a felicidade para o seu lar
        </h1>
        <p className="col-start-1 row-start-3 text-2xl">
          Encontre o animal de estimação ideal para seu estilo de vida
        </p>
        <Dogs className="col-start-2 row-start-2 justify-self-end" />
        <form
          onSubmit={handleSubmit(handleSearch)}
          className="col-start-2 row-start-3 flex items-center gap-5 justify-self-end"
        >
          <span className="block">busque um amigo:</span>
          <Controller
            control={control}
            name="state"
            render={({ field: { value, onChange } }) => {
              return (
                <SelectRadix
                  value={value}
                  onValueChange={onChange}
                  options={allStates}
                  placeholder="Selecione um estado"
                />
              );
            }}
          />
          <Button type="submit" className="rounded-2xl bg-yellow-500 p-4">
            <Search />
          </Button>
        </form>
      </div>
    </section>
  );
}
