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
    pt: "Portuguese",
    en: "English",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-transparent text-text border border-primary  p-2 rounded-lg gap-2 flex items-center opacity-50">
          <MdLanguage className="text-text text-xl" />
          <p className="font-bold text-sm">{languageLabels[language]}</p>
          <IoIosArrowDown  className="text-text text-sm " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-text  bg-background">
        <DropdownMenuLabel className="text-text">
          Select a language
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="pt" >
            Portuguese
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" >
            English
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
