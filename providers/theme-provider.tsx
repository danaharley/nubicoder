"use client";

import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};
