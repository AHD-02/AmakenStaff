import { Outlet } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
import Drawer from "./Drawer";
import Header from "./Header";
import Breadcrumbs from "componentsss/@extended/Breadcrumbs";
import AuthGuard from "utils/route-guard/AuthGuard";

const DashboardLayout = () => {
  const isHorizontal = false; //menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <AuthGuard>
      <Box sx={{ display: "flex", width: "100%", backgroundColor: "white" }}>
        <Header />
        <Drawer />
        <Box
          component="main"
          sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
        >
          <Toolbar sx={{ mt: isHorizontal ? 8 : "inherit" }} />
          <Container
            //maxWidth={container ? 'xl' : false}
            maxWidth={"xl"}
            sx={{
              ...{ px: { xs: 0, sm: 2 } },
              position: "relative",
              minHeight: "calc(100vh - 110px)",
              display: "flex",
              flexDirection: "column",
              height: "calc(100% - 110px)",
            }}
          >
            <Breadcrumbs />
            <Outlet />
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default DashboardLayout;
