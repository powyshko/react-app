import { createContext } from "react";

export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme)  => void;
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";