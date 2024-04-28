import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import Dogs from '@/assets/dogs.svg?react';

export function AuthLayout() {
  return (
    <section className="h-fit flex mt-32 justify-center gap-20">
      <div className="bg-red-500 h-[600px] w-[488px] rounded-2xl flex flex-col items-center justify-between pt-20 pb-10 ">
        <Logo />
        <Dogs />
      </div>
      <Outlet />
    </section>
  );
}
