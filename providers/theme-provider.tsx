"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};
