import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-neutral-800/50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-300">
        <p className="text-center md:text-left">
          © {year} LoadForge. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Loadforge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[var(--separators)]/30 px-3 py-1.5 text-sm hover:text-white hover:bg-white/10 transition-colors"
          >
            {t("buttons.github")}
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            {t("about")}
          </a>
          <a
            href="#functions"
            className="hover:text-white transition-colors"
          >
            {t("functions")}
          </a>
          <a
            href="#home"
            className="hover:text-white transition-colors"
          >
            {t("Home")}
          </a>
        </div>
      </div>
    </footer>
  );
}
