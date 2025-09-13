import { ExternalService } from "@/services";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import { FaGithub } from "react-icons/fa";

const ThreeScene = dynamic(() => import("../bigorn_3D/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full animate-pulse bg-muted/30 rounded-xl"
      aria-label="Carregando cena 3D"
    />
  ),
});

const handleRedirect = () => {
  ExternalService.redirectToExternal();
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--background_home)]/60 via-transparent to-[var(--background)]" />
      <div className="absolute inset-0 -z-20 opacity-50 pointer-events-none select-none">
        <img
          src="/background.svg"
          alt=""
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      <div className="relative w-full ">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-12 lg:py-24">
            <div className="lg:col-span-7 text-text">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--separators)]/30 bg-card/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>LoadForge</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                {t("home.title.before")}
                <span className="bg-clip-text text-transparent animate-gradient px-2">
                  {t("home.title.highlight")}
                </span>{" "}
                {t("home.title.after")}
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
                {t("home.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleRedirect}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow-sm hover:shadow-md transition-shadow"
                >
                  {t("home.button")}
                </button>

                <a
                  href="https://github.com/Loadforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--separators)]/30 px-6 py-3 text-text hover:bg-card/60 transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                  {t("buttons.github")}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="w-full max-w-md lg:max-w-lg aspect-square">
                <ThreeScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
