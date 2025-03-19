'use client';

import { Button } from "@/components/ui/button";
import useThemeStore from "@/store/theme.store";
import { useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

export default function ToggleButton() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <Button onClick={toggleTheme} className="p-2 bg-background text-text flex items-center gap-2 hover:bg-background-80 transition-all duration-300">
      {theme === "light" ? <FaMoon size={30} /> : <MdSunny size={30} />} 
    </Button>
  );
}
