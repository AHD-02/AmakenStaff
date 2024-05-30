import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user";
import AppReducer from "./app";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { GeneralApi } from "data/userApi";
import { PrivatePlaceApi } from "data/privatePlace";

const reducers = combineReducers({
  user: UserReducer,
  app: AppReducer,
  [GeneralApi.reducerPath]: GeneralApi.reducer,
  [PrivatePlaceApi.reducerPath]: PrivatePlaceApi.reducer,
});

const Store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      GeneralApi.middleware,
      PrivatePlaceApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
