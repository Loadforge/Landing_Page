"use client";

import About from "@/components/sections/About";
import Functions from "@/components/sections/Functions";
import Home from "@/components/sections/Home";
import Tecnologies from "@/components/sections/Tecnologies";
import useThemeStore from "@/store/theme.store";
import { useEffect } from "react";


export default function Page() {
    const initializeTheme = useThemeStore((state) => state.initializeTheme);
  
    useEffect(() => {
      initializeTheme();
    }, [initializeTheme]);
  
  return (
    <div className="flex flex-col ">
     <Home/>
     <Functions/>
     <Tecnologies/>
     <About/>
    </div>
  );
}
