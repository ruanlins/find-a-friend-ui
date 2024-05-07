import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col items-center gap-4 bg-red-100 sm:p-5">
      <Header />
      <Outlet />
    </div>
  );
}
