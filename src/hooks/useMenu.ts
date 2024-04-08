import { useCallback, useMemo } from "react";
import { MenuProps } from "types/menu";
import { useAppDispatch, useTypedSelector } from "../state/store.ts";
import { setIsDrawerOpened } from "../state/app.ts";


export function useGetMenu() {
  const memoizedValue = useMemo(
    () => ({
      menu: { title: "test" },
      menuLoading: false,
      menuError: null,
      menuValidating: false,
      menuEmpty: false,
    }),
    []
  );

  return memoizedValue;
}

export function useGetMenuMaster() {
  const isDrawerOpened = useTypedSelector((i) => i.app.isDrawerOpened);

  const memoizedValue = useMemo(
    () => ({
      menuMaster: {
        isComponentDrawerOpened: false,
        isDashboardDrawerOpened: isDrawerOpened,
      } as MenuProps,
      menuMasterLoading: false,
    }),
    [isDrawerOpened]
  );

  return memoizedValue;
}

// export function handlerComponentDrawer(isComponentDrawerOpened: boolean) {
//     // to update local state based on key
//
// //   mutate(
// //     endpoints.key + endpoints.master,
// //     (currentMenuMaster: any) => {
// //       return { ...currentMenuMaster, isComponentDrawerOpened };
// //     },
// //     false
// //   );
// }

export function useHandlerDrawerOpen() {
  const d = useAppDispatch();

  return useCallback(
    (isDashboardDrawerOpened: boolean) => {
      d(setIsDrawerOpened(isDashboardDrawerOpened));
    },
    [d]
  );
}
