import { EventAvailableOutlined, PeopleAltOutlined, PlaceOutlined } from "@mui/icons-material";
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
    label: "Staff",
    icon: <PeopleAltOutlined fontSize="small" />,
    link: "/",
  },
  {
    label: "Private Places",
    icon: <PlaceOutlined fontSize="small" />,
    link: "/private_places",
  },
  {
    label: "Users",
    icon: <PeopleAltOutlined fontSize="small" />,
    link: "/users",
  },
  {
    label: "Events",
    icon: <EventAvailableOutlined fontSize="small" />,
    link: "/events",
  },
  {
    label:"",
    link: "/viewPrivatePlace/:id",
    hideFromSidebar: true,
  }
] as const;

const firstSectionContentArray = ["/", "/users", "/events", "/private_places"];
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
