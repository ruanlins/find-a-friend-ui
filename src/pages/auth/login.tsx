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

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Form>();

  return (
    <div className="h-[600px] w-[488px] flex flex-col justify-end">
      <h1 className="font-bold text-6xl text-blue-950 mb-28">Boas Vindas!</h1>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="space-y-14">
        <div className="flex flex-col space-y-5">
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
        </div>
        <div className="space-y-4">
          <Button
            disabled={isSubmitting}
            className="w-full pl-4 h-14 rounded-2xl font-extrabold tracking-wide text-white bg-blue-950 outline-none focus:ring-2 focus:ring-blue-400"
            type="submit">
            Login
          </Button>
          <Button
            className="w-full pl-4 h-14 rounded-2xl font-extrabold tracking-wide text-blue-950 bg-slate-200 outline-none focus:ring-2 focus:ring-blue-950"
            type="submit">
            Cadastrar minha organização
          </Button>
        </div>
      </form>
    </div>
  );
}
