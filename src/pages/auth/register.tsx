import Button from "@/components/form/button";
import { Input } from "@/components/form/input";
import { useForm } from "react-hook-form";
import * as Separator from "@radix-ui/react-separator";
import { SelectOptions } from "@/components/form/select";
import { allStates } from "@/utils/allStates";

function handleForm(data: Form) {
  console.log(data);
}

interface Form {
  email: string;
  password: string;
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Form>();

  return (
    <div className="mb-20 flex w-[488px] flex-col space-y-14 ">
      <h1 className="text-center text-6xl font-bold  text-blue-950">
        Cadastre sua organização
      </h1>
      <form onSubmit={handleSubmit(handleForm)} className="space-y-14">
        <div className="flex flex-col space-y-5">
          <Input
            name="name"
            label="Nome da organização"
            type="text"
            placeholder="Digite aqui o nome da organização"
            register={register}
          />
          <Input
            name="text"
            label="Nome do responsável"
            type="text"
            placeholder="Digite aqui seu nome completo"
            register={register}
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Digite aqui seu email"
            register={register}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
          />
          <Input
            name="confirmpassword"
            label="Confirme sua senha"
            type="password"
            placeholder="Confirme sua senha"
            register={register}
          />
          <Separator.Root className="h-[1px] w-full bg-blue-950 opacity-70" />
          <Input
            name="adress"
            label="Endereço com número"
            type="text"
            placeholder="Digite aqui seu endereço"
            register={register}
          />
          <SelectOptions
            ariaLabel="Estados"
            placeholder="Indique seu estado"
            options={allStates}
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            type="number"
            placeholder="Digite aqui seu WhatsApp"
            register={register}
          />
        </div>
        <div className="space-y-4">
          <Button
            disabled={isSubmitting}
            className="h-14 w-full rounded-2xl bg-blue-950 pl-4 font-extrabold tracking-wide text-white outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Cadastrar
          </Button>
          <Button
            className="mb-20 h-14 w-full rounded-2xl bg-slate-200 pl-4 font-extrabold tracking-wide text-blue-950 outline-none focus:ring-2 focus:ring-blue-950"
            type="submit"
          >
            Já possui cadastro?
          </Button>
        </div>
      </form>
    </div>
  );
}
