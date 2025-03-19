"use client";

import useThemeStore from "@/store/theme.store";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

export default function ToggleButton() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <a
      onClick={toggleTheme}
      className=" bg-background text-text flex items-center gap-2 cursor-pointer "
    >
      {theme === "light" ? <FaMoon size={30} /> : <MdSunny size={30} />}
    </a>
  );
}
