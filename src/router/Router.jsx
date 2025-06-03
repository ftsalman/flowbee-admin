import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../Pages/auth/LoginPage";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardPage from "../Pages/dashboard/DashboardPage";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace={true} />, // redirect to login
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />, // Layout here
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);
