import { MdLanguage } from "react-icons/md";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState("pt");

  const languageLabels: Record<string, string> = {
    pt: "Português",
    en: "English",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-background text-text border border-primary  p-2 rounded-lg gap-2 flex items-center">
          <MdLanguage className="text-text text-4xl" />
          <p className="font-bold text-xl">{languageLabels[language]}</p>
          <IoIosArrowDown  className="text-text text-xl" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-text text-textDark">
        <DropdownMenuLabel className="text-text">
          Selecione o idioma
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="pt" className="hover:bg-background">
            Português
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="hover:bg-background">
            English
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
