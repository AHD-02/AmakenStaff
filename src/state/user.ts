import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Tokens } from "types";
import Cookies from "js-cookie";

export interface UserState {
  isAuthenticated?: boolean;
  accessToken?: string | null;
  refreshToken?: string | null;
  accountDetails?: any;
}

const initialState: UserState = {
  isAuthenticated: !!Cookies.get("jwt_token"),
  accessToken: Cookies.get("jwt_token") ?? null,
  refreshToken: Cookies.get("efreshToken") ?? null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      Cookies.remove("jwt_token");
      Cookies.remove("refreshToken");
      Cookies.remove("jwt_token", { domain: ".amaken.com" });
      Cookies.remove("refreshToken", { domain: ".amaken.com" });
      Cookies.remove("jwt_token", { domain: "localhost" });
      Cookies.remove("refreshToken", { domain: "localhost" });
    },
    setTokens: (state, action: PayloadAction<Tokens>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      Cookies.set("jwt_token", action.payload.accessToken!);
      Cookies.set("refreshToken", action.payload.refreshToken!);
      Cookies.set("jwt_token", action.payload.accessToken!, {
        domain: ".amaken.com",
      });
      Cookies.set("refreshToken", action.payload.refreshToken!, {
        domain: ".amaken.com",
      });
      Cookies.set("jwt_token", action.payload.accessToken!, {
        domain: "localhost",
      });
      Cookies.set("refreshToken", action.payload.refreshToken!, {
        domain: "localhost",
      });
      state.isAuthenticated = true;
    },
    setAccountDetails: (state, action: PayloadAction<any>) => {
      state.accountDetails = action.payload;
    },
  },
});

export const { logout, setTokens, setAccountDetails } = userSlice.actions;

export default userSlice.reducer;
