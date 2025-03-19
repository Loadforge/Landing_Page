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
        <button className="bg-transparent text-text border border-primary  p-4 rounded-lg gap-4 flex items-center">
          <MdLanguage className="text-text text-4xl" />
          <p className="font-bold text-xl">{languageLabels[language]}</p>
          <IoIosArrowDown  className="text-text text-2xl " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-text  bg-background">
        <DropdownMenuLabel className="text-text">
          Select a language
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="pt" >
            Português
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" >
            English
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
