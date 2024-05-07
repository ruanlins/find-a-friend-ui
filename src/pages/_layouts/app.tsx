import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex justify-center bg-red-200 sm:p-5">
      <Outlet />
    </div>
  );
}
