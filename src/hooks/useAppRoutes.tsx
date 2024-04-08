import { EventAvailableOutlined, PeopleAltOutlined } from "@mui/icons-material";
import { useMemo } from "react";

export type NavigationItem = {
  readonly children?: readonly NavigationItem[];
  readonly label: string;
  readonly icon?: React.ReactNode;
  readonly link: string | undefined;
  readonly requiredParams?: readonly string[];
  readonly urlFillParams?: readonly string[];
  readonly requiredPermission?: string[];
  readonly hideFromSidebar?: boolean;
};

export const wholeContent: readonly NavigationItem[] = [
  {
    label: "Users",
    icon: <PeopleAltOutlined fontSize="small" />,
    link: "/",
  },
  {
    label: "Events",
    icon: <EventAvailableOutlined fontSize="small" />,
    link: "/events",
  },
] as const;

const firstSectionContentArray = ["/", "/events"];
const secondSectionContentArray = ["settings", "help"];

const sideBarKeys = [...firstSectionContentArray, ...secondSectionContentArray];

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
      return items.filter((item) => !item.hideFromSidebar);
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
