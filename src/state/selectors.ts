import {RootState} from "./store";

export const getIsLoading = (state: RootState) => state.app?.isLoading;
export const getIsAuthenticated = (state: RootState) => state.user?.isAuthenticated;
export const getHeaderTitle = (state: RootState) => state.app?.headerTitle;
// export const getAccount = (state: RootState) => state.user?.accountDetails
