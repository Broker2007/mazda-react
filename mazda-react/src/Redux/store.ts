import { configureStore } from '@reduxjs/toolkit'
import entry from './FormSlice'
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        entry: entry,
    },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()