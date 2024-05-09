import { Header } from "@/components/header";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
  const location = useLocation();
  const shouldShowHeader =
    location.pathname !== "/" && location.pathname !== "/feed";

  return (
    <div className="flex flex-col items-center space-y-2 bg-red-100">
      {shouldShowHeader && <Header />}
      <Outlet />
    </div>
  );
}
