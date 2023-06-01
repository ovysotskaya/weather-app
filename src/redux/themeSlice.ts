import {createSlice} from '@reduxjs/toolkit'
import {ThemeName} from "../components/ThemeProvider/ThemeProvider";

export const themeSlice = createSlice({
    name: "theme",
    initialState: "light" as ThemeName,
    reducers: {
        toggle: (state) => {
            return state === "light" ? "dark" : "light"
        },
    },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer