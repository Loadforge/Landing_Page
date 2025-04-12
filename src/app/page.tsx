"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import About from "@/components/sections/About";
import Functions from "@/components/sections/Functions";
import Home from "@/components/sections/Home";
import Tecnologies from "@/components/sections/Tecnologies";
import useThemeStore from "@/store/theme.store";

export default function Page() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initializeTheme();

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [initializeTheme]);

  if (isMobile) {
    return (
      <div className="flex fixed w-full flex-col items-center justify-center h-screen text-center px-4 text-white bg-black z-50">

        <p className="text-2xl font-semibold">Por favor, utilize um computador</p>
        <p className="text-lg text-gray-300 mt-2 max-w-md">
          Esta aplicação foi projetada para telas maiores e não é compatível com dispositivos móveis.
          <br />
          **Por que apenas computadores?**
          <ul className="list-disc pl-5 mt-2">
            <li>Interface complexa, ideal para telas grandes</li>
            <li>Funcionalidades avançadas que não funcionam bem em dispositivos móveis</li>
            <li>Garantir a melhor experiência de uso com mouse e teclado</li>
          </ul>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Home />
      <Functions />
      <Tecnologies />
      <About />
    </div>
  );
}
