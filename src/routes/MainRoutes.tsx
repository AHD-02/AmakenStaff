import ErrorBoundary from "./ErrorBoundary";
import DashboardLayout from "layouts/Dashboard";
import EventsPage from "pages/events";
import StaffPage from "pages/manageStaff";
import UsersPage from "pages/users";

const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "/",
      element: <StaffPage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
    {
      path: '/events',
      element: <EventsPage />,
    }
  ],
};

export default MainRoutes;
