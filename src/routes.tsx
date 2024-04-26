import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';
import { Register } from './pages/auth/register';
import { Login } from './pages/auth/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);