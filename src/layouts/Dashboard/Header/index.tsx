import { ReactNode, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, AppBarProps, Toolbar, useMediaQuery } from "@mui/material";
import AppBarStyled from "./AppBarStyled";
import HeaderContent from "./HeaderContent";
import IconButton from "Components/@extended/IconButton";
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from "config";
import useConfig from "hooks/useConfig";
import { useGetMenuMaster, useHandlerDrawerOpen } from "hooks/useMenu";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MenuOrientation, ThemeMode } from "types/config";

const Header = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const { menuOrientation } = useConfig();
  const handlerDrawerOpen = useHandlerDrawerOpen();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColor =
    theme.palette.mode === ThemeMode.DARK ? "background.default" : "grey.100";

  const mainHeader: ReactNode = (
    <Toolbar>
      {!isHorizontal ? (
        <IconButton
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          edge="start"
          color="secondary"
          variant="light"
          sx={{
            color: "text.primary",
            bgcolor: drawerOpen ? "transparent" : iconBackColor,
            ml: { xs: 0, lg: -2 },
          }}
        >
          {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </IconButton>
      ) : null}
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar: AppBarProps = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      zIndex: 1200,
      width: isHorizontal
        ? "100%"
        : {
            xs: "100%",
            lg: drawerOpen
              ? `calc(100% - ${DRAWER_WIDTH}px)`
              : `calc(100% - ${MINI_DRAWER_WIDTH}px)`,
          },
    },
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
