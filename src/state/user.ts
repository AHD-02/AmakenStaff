import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { Tokens } from 'types/commonType';

export interface UserState {
    isAuthenticated?: boolean
    accessToken?: string | null
    refreshToken?: string | null
}

const initialState: UserState = {
    isAuthenticated: !!Cookies.get('jwt_token'),
    accessToken: Cookies.get('jwt_token') ?? null,
    refreshToken: Cookies.get('refreshToken') ?? null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: state => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            Cookies.remove('jwt_token');
            Cookies.remove('refreshToken');
            Cookies.remove('jwt_token', {domain: ".talmaro.com"});
            Cookies.remove('refreshToken', {domain: ".talmaro.com"});
        },
        setTokens: (state, action: PayloadAction<Tokens>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
        },
        // setAccountDetails: (state, action: PayloadAction<AccountType>) => {
        //     state.accountDetails = action.payload
        // },
    },
})

export const {logout, setTokens} = userSlice.actions

export default userSlice.reducer
