import ErrorBoundary from "./ErrorBoundary";
import DashboardLayout from "layouts/Dashboard";

const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "/",
      errorElement: <ErrorBoundary />,
      element: <>Dashboard</>,
    },
  ],
};

export default MainRoutes;
