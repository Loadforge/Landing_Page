'use client';

import { Button } from "@/components/ui/button";
import useThemeStore from "@/store/theme.store";
import { useEffect } from "react";


export default function ToogleButton() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {

    initializeTheme();
  }, [initializeTheme]);
  const { theme, toggleTheme } = useThemeStore();
  return (
    <>
     <Button onClick={toggleTheme} className="p-2 bg-primary">
      Alternar para {theme === "light" ? "escuro" : "claro"}
    </Button>
    </>
  );
}
