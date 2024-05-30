import ErrorBoundary from "./ErrorBoundary";
import DashboardLayout from "layouts/Dashboard";
import EventsPage from "pages/events";
import StaffPage from "pages/manageStaff";
import PrivatePlacesPage from "pages/privatePlaces";
import ViewPrivatePlace from "pages/privatePlaces/view";
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
    },
    {
      path: '/private_places',
      element: <PrivatePlacesPage />,
    },
    {
      path: '/private_places/:id',
      element: <ViewPrivatePlace />,
    }
  ],
};
export default MainRoutes;
