import DashboardPage from "pages/dashboard";
import ErrorBoundary from "./ErrorBoundary";
import DashboardLayout from "layouts/Dashboard";

const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "/",
      element: <DashboardPage />
    },

  ],
};

export default MainRoutes;
