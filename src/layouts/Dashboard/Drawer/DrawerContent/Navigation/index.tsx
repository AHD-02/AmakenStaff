import { useLayoutEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, List, Typography, useMediaQuery } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";
import useConfig from "hooks/useConfig";
import { HORIZONTAL_MAX_ITEM } from "config";
import { useGetMenu, useGetMenuMaster } from "hooks/useMenu";
import { NavItemType } from "types/menu";
import { MenuOrientation } from "types/config";
import { useAppRoutes } from "hooks/useAppRoutes";

const menuItem: { items: NavItemType[] } = { items: [] };

const Navigation = () => {
  const theme = useTheme();
  const { menuOrientation } = useConfig();
  const { menuLoading } = useGetMenu();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [selectedID, setSelectedID] = useState<string | undefined>("");
  const [selectedItems, setSelectedItems] = useState<string | undefined>("");
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<{
    items: NavItemType[];
  }>({ items: [] });

  const { navBarItems } = useAppRoutes();
  const menuDashboardItems = useMemo(() => {
    const allcontent =
      navBarItems
        ?.filter((i) => !i.hideFromSidebar)
        ?.map((navItem) => {
          return {
            title: navItem.label,
            url: navItem.link,
            type: (navItem.children ?? [])?.length === 0 ? "item" : "collapse",
            id: navItem.link,
            breadcrumbs: false,
            iconComponent: navItem.icon,
          } satisfies NavItemType;
        }) ?? [];

    const mappedItems: NavItemType = {
      id: "group-dashboard-loading",
      title: "",
      type: "group",

      children: allcontent,
    };
    return mappedItems;
  }, [navBarItems]);

  const dashboardMenu = menuDashboardItems;

  useLayoutEffect(() => {
    const isFound = menuItem.items.some((element: any) => {
      if (element.id === "group-dashboard") {
        return true;
      }
      return false;
    });

    if (menuLoading) {
      menuItem.items.splice(0, 0, dashboardMenu);
      setMenuItems({ items: [...menuItem.items] });
    } else if (!menuLoading && dashboardMenu?.id !== undefined && !isFound) {
      menuItem.items.splice(0, 1, dashboardMenu);
      setMenuItems({ items: [...menuItem.items] });
    } else {
      setMenuItems({ items: [...menuItem.items] });
    }
    // eslint-disable-next-line
  }, [menuLoading, menuDashboardItems]);

  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  //  first it checks menu item is more than giving HORIZONTAL_MAX_ITEM after that get lastItemid by giving horizontal max
  // item and it sets horizontal menu by giving horizontal max item lastly slice menuItem from array and set into remItems

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items
      .slice(lastItem - 1, menuItems.items.length)
      .map((item) => ({
        title: item.title,
        elements: item.children,
        icon: item.icon,
        ...(item.url && {
          url: item.url,
        }),
      }));
  }

  const navGroups = menuItems.items
    .slice(0, lastItemIndex + 1)
    .map((item, index) => {
      switch (item.type) {
        case "group":
          if (item.url && item.id !== lastItemId) {
            return (
              <List key={item.id} {...(isHorizontal && { sx: { mt: 0.5 } })}>
                {!isHorizontal && index !== 0 && <Divider sx={{ my: 0.5 }} />}
                <NavItem item={item} level={1} isParents />
              </List>
            );
          }

          return (
            <NavGroup
              key={item.id}
              setSelectedID={setSelectedID}
              setSelectedItems={setSelectedItems}
              setSelectedLevel={setSelectedLevel}
              selectedLevel={selectedLevel}
              selectedID={selectedID}
              selectedItems={selectedItems}
              lastItem={lastItem!}
              remItems={remItems}
              lastItemId={lastItemId}
              item={item}
            />
          );
        default:
          return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Fix - Navigation Group E1
            </Typography>
          );
      }
    });

  return (
    <Box
      key={menuDashboardItems.children?.length}
      sx={{
        pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
        ...(!isHorizontal && {
          "& > ul:first-of-type": { mt: 0 },
        }),
        display: isHorizontal ? { xs: "block", lg: "flex" } : "block",
      }}
    >
      {navGroups}
    </Box>
  );
};

export default Navigation;
