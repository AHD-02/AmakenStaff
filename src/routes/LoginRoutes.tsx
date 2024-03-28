import AuthLayout from "layouts/Auth";
import LoginPage from "pages/login";

const LoginRoutes = {
  path: "/auth",
  children: [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ],
};

export default LoginRoutes;
