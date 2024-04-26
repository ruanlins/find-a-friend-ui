import Button from '@/components/form/button';
import { Input } from '@/components/form/input';
import { useForm } from 'react-hook-form';

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
    <div className="h-[600px] w-[488px] flex flex-col mt-20 space-y-14 ">
      <h1 className="font-bold text-6xl text-blue-950  text-center">
        Cadastre sua organização
      </h1>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="space-y-14">
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
          {/* separator do radix */}
          <Input
            name="adress"
            label="Endereço com número"
            type="text"
            placeholder="Digite aqui seu endereço"
            register={register}
          />
          {/* input de estado */}
          <Input
            name="whatsapp"
            label="Whatsapp"
            type="number"
            placeholder="Digite aqui seu endereço"
            register={register}
          />
        </div>
        <div className="space-y-4">
          <Button
            disabled={isSubmitting}
            className="w-full pl-4 h-14 rounded-2xl font-extrabold tracking-wide text-white bg-blue-950 outline-none focus:ring-2 focus:ring-blue-400"
            type="submit">
            Cadastrar
          </Button>
          <Button
            className="w-full pl-4 h-14 rounded-2xl font-extrabold tracking-wide text-blue-950 bg-slate-200 outline-none mb-20 focus:ring-2 focus:ring-blue-950"
            type="submit">
            Já possui cadastro?
          </Button>
        </div>
      </form>
    </div>
  );
}
