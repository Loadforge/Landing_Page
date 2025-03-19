"use client";

import { useState, useEffect } from "react";
import LanguageToogle from "../language.toogle/LanguageButton";
import ToggleButton from "../theme.toogle/ToogleButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-transparent  backdrop-blur-lg" : "bg-transparent"
      } text-text shadow-2xl flex items-center px-5 h-24 justify-between sticky top-0 left-0 w-full z-10`}
    >
      <div className="p-3 flex items-end">
        <img src="/assets/logo/Logo.svg" alt="Logo" className="max-h-full max-w-[90px] object-contain" />
        <img src="/assets/logo/LOADFORGE.svg" alt="Logo" className="max-h-full max-w-[100px] object-contain" />
      </div>
      <div>
        <BreadCrumbs/>
      </div>

      <div className="flex gap-8 pr-24">
        <LanguageToogle />
        <ToggleButton />
      </div>
    </header>
  );
}
