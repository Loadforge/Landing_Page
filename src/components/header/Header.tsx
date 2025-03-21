"use client";

import { useState, useEffect } from "react";
import LanguageToogle from "../language.toogle/LanguageButton";
import ToggleButton from "../theme.toogle/ToogleButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import useThemeStore from "@/store/theme.store";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useThemeStore((state) => state.theme);

  const logoSrc =
    theme === "light" ? "./Logo_black.svg" : "./Logo.svg";
  const loadforgeSrc =
    theme === "light"
      ? "./LOADFORGE_BLACK.svg"
      : "./LOADFORGE.svg";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-transparent"
      } text-text flex items-center px-5 h-16 justify-between fixed top-0 left-0 w-full z-10 shadow-[0_4px_10px_var(--separators)]`}
    >
      <div className="flex items-end">
        <img
          src={logoSrc}
          alt="Logo"
          className="max-h-full max-w-[90px] object-contain"
        />
        <img
          src={loadforgeSrc}
          alt="Logo"
          className=" fixed ml-20 max-h-full max-w-[70px] object-contain"
        />
      </div>
      <div>
        <BreadCrumbs />
      </div>

      <div className="flex gap-8 pr-10">
        <LanguageToogle />
        <ToggleButton />
      </div>
    </header>
  );
}
