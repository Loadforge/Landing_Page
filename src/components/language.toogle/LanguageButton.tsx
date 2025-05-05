"use client";

import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const [isClient, setIsClient] = useState(false);
  const [language, setLanguage] = useState<string>("pt-BR");

  useEffect(() => {
    setIsClient(true);

    const savedLanguage =
      typeof window !== "undefined" ? localStorage.getItem("language") : null;

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const initialLang = i18n.language || "pt-BR";
      setLanguage(initialLang);
    }
  }, [i18n.language]);

  useEffect(() => {
    if (isClient) {
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);
    }
  }, [language, i18n, isClient]);

  const languageLabels: Record<string, string> = {
    "pt-BR": "Português (BR)",
    "en-US": "English (US)",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-transparent text-text border border-primary p-2 rounded-lg gap-2 flex items-center opacity-50">
          <MdLanguage className="text-text text-xl" />
          <p className="font-bold text-sm">{languageLabels[language]}</p>
          <IoIosArrowDown className="text-text text-sm " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-text bg-background">
        <DropdownMenuLabel className="text-text">
          Select a language
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(value: string) => setLanguage(value)}
        >
          <DropdownMenuRadioItem value="pt-BR">
            Português (BR)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en-US">
            English (US)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
