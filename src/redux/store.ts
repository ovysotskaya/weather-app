import { configureStore } from "@reduxjs/toolkit"
import locationReducer from "./locationSlice"
import themeReducer from "./themeSlice"

const store = configureStore({
    reducer: {
        location: locationReducer,
        theme: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store