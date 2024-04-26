import { UseFormRegister } from 'react-hook-form';

type InputType = React.ComponentProps<'input'> & {
  name: string;
  label: string;
  register: UseFormRegister<any>;
};

export function Input({ name, label, register, ...props }: InputType) {
  return (
    <div>
      <label
        className="block font-semibold text-blue-950"
        htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full pl-4 h-14 bg-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-950"
        id={name}
        {...register(name)}
        {...props}
      />
    </div>
  );
}
