import {useEffect, useState} from 'react';
import * as React from "react";
import {Theme, ThemeProvider} from '@emotion/react'
import {
    createTheme as createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    Theme as MuiTheme
} from '@mui/material/styles';
import {useAppSelector} from "../../redux/hooks";

export type ThemeName = "light" | "dark";

declare module '@emotion/react' {
    export interface Theme {
        color: string,
        bgColor: string,
        bgColor2: string,
        name: ThemeName
    }
}

const lightTheme = {
    color: "#333",
    bgColor: "#FFF",
    bgColor2: "#C0C0C0",
    name: "light"
} as Theme

const darkTheme = {
    color: "#FFF",
    bgColor: "#333",
    bgColor2: "#F5F5F5",
    name: "dark"
} as Theme

const muiLightTheme = createMuiTheme();
const muiDarkTheme = createMuiTheme({
    palette: {
        mode: 'dark',
    },
});

const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
    const themeName = useAppSelector(state => state.theme)
    const [theme, setTheme] = useState<Theme>(lightTheme);
    const [muiTheme, setMuiTheme] = useState<MuiTheme>(muiLightTheme);

    useEffect(() => {
        setTheme(themeName === 'light' ? lightTheme : darkTheme)
        setMuiTheme(themeName === 'light' ? muiLightTheme : muiDarkTheme)
    }, [themeName])

    return (
        <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default CustomThemeProvider

