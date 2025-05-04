"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "@/components/sections/Home";
import Functions from "@/components/sections/Functions";
import Tecnologies from "@/components/sections/Tecnologies";
import About from "@/components/sections/About";
import useThemeStore from "@/store/theme.store";

export default function Page() {
  const { t } = useTranslation();
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
        <p className="text-2xl font-semibold">{t("mobile.title")}</p>
        <p className="text-lg text-gray-300 mt-2 max-w-md">
          {t("mobile.description")}
          <br />
          <strong>{t("mobile.why")}</strong>
          <ul className="list-disc pl-5 mt-2 text-left">
            <li>{t("mobile.reasons.interface")}</li>
            <li>{t("mobile.reasons.features")}</li>
            <li>{t("mobile.reasons.experience")}</li>
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
