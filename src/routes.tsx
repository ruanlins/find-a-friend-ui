import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Register } from "./pages/auth/register";
import { Login } from "./pages/auth/login";
import { RegisterPet } from "./pages/app/register-pet";
import { PetInfo } from "./pages/app/pet-info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/pet/register",
        element: <RegisterPet />,
      },
      {
        path: "/pet/:id",
        element: <PetInfo />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
