import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Locale} from 'types';
import {AlertColor} from '@mui/material'
import Cookies from "js-cookie";

export interface AppState {
    isLoading: boolean
    headerTitle: string
    alert: {
        severity: AlertColor,
        content: string,
        isOpen: boolean
    }
    language: Locale;
    isDrawerOpened: boolean
}

const initialState: AppState = {
    isLoading: false,
    headerTitle: "",
    alert: {
        severity: 'error',
        content: '',
        isOpen: false
    },
    language: Cookies.get('lang') as Locale || 'en',
    isDrawerOpened: true
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setHeaderTitle: (state, action: PayloadAction<string>) => {
            state.headerTitle = action.payload;
        },
        setAlert: (state, action: PayloadAction<{
            severity: AlertColor,
            content: string,
            isOpen: boolean
        }>) => {
            state.alert = action.payload;

        },
        setLanguage: (state, action: PayloadAction<Locale>) => {
            state.language = action.payload;
        },
        setIsDrawerOpened: (state, action: PayloadAction<boolean>) => {
            state.isDrawerOpened = action.payload;
        },
    },
})

export const {setIsLoading, setIsDrawerOpened, setHeaderTitle, setAlert, setLanguage} = appSlice.actions

export default appSlice.reducer
