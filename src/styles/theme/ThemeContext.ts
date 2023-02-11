import {createContext} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export interface ThemeContextProps{
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

// to save theme value even after closing a page
export const LOCAL_STORAGE_THEME_KEY = "theme";

