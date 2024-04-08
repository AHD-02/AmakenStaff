import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UserReducer from './user';
import AppReducer from './app';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {GeneralApi} from "data/userApi";

const reducers = combineReducers({
    user: UserReducer,
    app: AppReducer,
    [GeneralApi.reducerPath]: GeneralApi.reducer,
});

const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            GeneralApi.middleware,
        ]),
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
