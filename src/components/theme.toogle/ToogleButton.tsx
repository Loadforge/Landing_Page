"use client";

import useThemeStore from "@/store/theme.store";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

export default function ToggleButton() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <a
      onClick={toggleTheme}
      className=" bg-transparent text-text flex items-center gap-2 cursor-pointer "
    >
      {theme === "light" ? <MdSunny size={30} /> : <IoMoonOutline  size={30} />}
    </a>
  );
}
