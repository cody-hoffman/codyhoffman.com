"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, ...rest } = useTheme();

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger asChild>
          <Button
            className="text-zinc-100 rounded-full hover:bg-zinc-600 hover:text-zinc-100"
            size="icon"
            variant="ghost"
            onClick={switchTheme}
          >
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle theme</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
