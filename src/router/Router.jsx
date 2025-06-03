import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../Pages/auth/LoginPage";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardPage from "../Pages/DashboardPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import SubscriptionPage from "../Pages/SubscriptionPage";
import ContactPage from "../Pages/ContactPage";
import ReportsPage from "../Pages/ReportsPage";
import SettingsPage from "../Pages/SettingsPage";

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
      {
        path: "subscription",
        element: <SubscriptionPage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" replace={true} />, // redirect to dashboard
      },
    ],
  },
]);
