import ErrorBoundary from "./ErrorBoundary";
import DashboardLayout from "layouts/Dashboard";
import UsersPage from "pages/users";

const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "/",
      element: <UsersPage />
    },

  ],
};

export default MainRoutes;
