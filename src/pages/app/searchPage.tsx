import Logo from "@/assets/logo.svg?react";
import Dogs from "@/assets/dogs.svg?react";
import Search from "@/assets/search.svg?react";
import Select from "react-select";
import { allStates } from "@/utils/allStates";
import { useState } from "react";

export function SearchPage() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.value);
  }

  function handleClick() {
    console.log(search);
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
        <div className="col-start-2 row-start-3 flex items-center gap-5 justify-self-end">
          <span>busque um amigo:</span>
          <Select
            onChange={handleChange}
            className="w-52"
            options={allStates}
            name="state"
            placeholder="Estado"
            styles={{
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: "#000",
              }),
              container: (baseStyles) => ({
                ...baseStyles,
                color: "#000",
                fontSize: "16px",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#transparent",
                color: "#000",
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                fontSize: "24x",
                fontWeight: "bold",
                backgroundColor: "transparent",
                height: "56px",
                borderRadius: "8px",
                outline: "none",
                color: "#000",
                borderColor: "#172554",
              }),
            }}
          />
          <button
            onClick={handleClick}
            className="rounded-lg bg-yellow-500 p-4"
          >
            <Search />
          </button>
        </div>
      </div>
    </section>
  );
}
