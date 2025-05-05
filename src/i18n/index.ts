import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./locales/en-US.json";
import ptBR from "./locales/pt-BR.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": { translation: enUS },
      "pt-BR": { translation: ptBR },
    },
    fallbackLng: "en-US",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en-US", "pt-BR"],
    load: "currentOnly",
  });

export default i18n;
