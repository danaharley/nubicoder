"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div className="rounded-md p-1.5 ring-2 ring-slate-500/75">
        <Icon icons={["sun"]} className="dark:hidden" size="h-5 w-5" />
        <Icon icons={["moon"]} className="hidden dark:block" size="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
};
