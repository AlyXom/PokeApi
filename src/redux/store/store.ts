import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "../starReducer/StarSlice";

export const store = configureStore({
    reducer: {
        stars: pokeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch