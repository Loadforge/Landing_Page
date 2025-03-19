"use client";

import About from "@/components/sections/About";
import Functions from "@/components/sections/Functions";
import Home from "@/components/sections/Home";
import Tecnologies from "@/components/sections/Tecnologies";


export default function Page() {
  return (
    <div className="flex flex-col ">
     <Home/>
     <Functions/>
     <Tecnologies/>
     <About/>
    </div>
  );
}
