import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavUser from "./NavUser";
import NavCard from "./NavCard";
import Navigation from "./Navigation";
import { useGetMenuMaster } from "hooks/useMenu";
import SimpleBar from "Components/SimpleBar";

const DrawerContent = () => {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <SimpleBar
        sx={{
          "& .simplebar-content": {
            display: "flex",
            flexDirection: "column",
          },
          backgroundImage: "url(nav-bg.png)",
        }}
      >
        <Navigation />
        {drawerOpen && !matchDownMD && <NavCard />}
      </SimpleBar>
      <NavUser />
    </>
  );
};

export default DrawerContent;
