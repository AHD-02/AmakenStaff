import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface AppState {
    isLoading: boolean
    headerTitle: string
    isDrawerOpened: boolean
}

const initialState: AppState = {
    isLoading: false,
    headerTitle: "",
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
        setIsDrawerOpened: (state, action: PayloadAction<boolean>) => {
            state.isDrawerOpened = action.payload;
        },
    },
})

export const {setIsLoading, setIsDrawerOpened, setHeaderTitle} = appSlice.actions

export default appSlice.reducer
