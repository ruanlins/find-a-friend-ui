import { Outlet } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";
import Dogs from "@/assets/dogs.svg?react";

export function AuthLayout() {
  return (
    <section className="mt-32 flex h-fit justify-center gap-20 ">
      <div className="flex h-[600px] w-[488px] flex-col items-center justify-between rounded-2xl bg-red-500 pb-10 pt-20 ">
        <Logo />
        <Dogs />
      </div>
      <Outlet />
    </section>
  );
}
