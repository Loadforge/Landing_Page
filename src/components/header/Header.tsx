"use client";

import { useState, useEffect } from "react";
import LanguageToogle from "../language.toogle/LanguageButton";
import ToggleButton from "../theme.toogle/ToogleButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import useThemeStore from "@/store/theme.store";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useThemeStore((state) => state.theme);

  const logoSrc =
    theme === "light" ? "/Logo_black.svg" : "/Logo.svg";
  const loadforgeSrc =
    theme === "light"
      ? "/LOADFORGE_BLACK.svg"
      : "/LOADFORGE.svg";

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
        isScrolled
          ? "backdrop-blur-md backdrop-saturate-150 bg-background/60 border-b border-[var(--separators)]/20"
          : "bg-transparent"
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

      <div className="flex items-center gap-4 pr-5">
        <a
          href="https://github.com/Loadforge/Landing_Page"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[var(--separators)]/30 p-2 text-text hover:bg-card/60 transition-colors"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub className="h-4 w-4" />
        </a>
        <LanguageToogle /> 
        <ToggleButton />
      </div>
    </header>
  );
}
