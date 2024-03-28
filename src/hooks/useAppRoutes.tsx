import { DashboardOutlined } from "@ant-design/icons";
import { useMemo } from "react";

export type NavigationItem = {
  readonly children?: readonly NavigationItem[];
  readonly label: string;
  readonly icon?: React.ReactNode;
  readonly link: string | undefined;
  readonly requiredParams?: readonly string[];
  readonly hideFromSidebar?: boolean;
};

export const wholeContent: readonly NavigationItem[] = [
  {
    label: "dashboard",
    icon: <DashboardOutlined size={25} />,
    link: "/",
  },
] as const;

const firstSectionContentArray = ["/"];
const secondSectionContentArray = ["settings", "help"];

const sideBarKeys = [...firstSectionContentArray, ...secondSectionContentArray]; // firstSectionContentArray.concat(secondSectionContentArray)

const sideMenuData = {
  firstSectionContent: wholeContent.filter(
    (i) => !i.link || firstSectionContentArray.includes(i.link)
  ),
  secondSectionContent: wholeContent.filter((i) =>
    secondSectionContentArray.includes(i.label)
  ),
  content: wholeContent.filter(
    (i) =>
      !i.link || sideBarKeys.includes(i.link) || sideBarKeys.includes(i.label)
  ),
  sideBarKeys,
};

export const useAppRoutes = () => {
  return useMemo(() => {
    const filterItems = (
      items: readonly NavigationItem[]
    ): NavigationItem[] => {
      return items
        .filter((item) => !item.hideFromSidebar)
        .map((item) => ({
          ...item,
          children: item.children ? filterItems(item.children) : undefined,
        }));
    };

    const res = {
      allContent: filterItems(wholeContent),
      firstSectionContent: filterItems(sideMenuData.firstSectionContent ?? []),
      secondSectionContent: filterItems(
        sideMenuData.secondSectionContent ?? []
      ),
      navBarItems: filterItems(sideMenuData.content ?? []),
    };
    return res;
  }, []);
};
