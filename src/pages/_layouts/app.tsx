import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="flex justify-center bg-red-200">
      <Outlet />
    </div>
  );
}
