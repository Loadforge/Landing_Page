import { useTranslation } from "react-i18next";
import { FiSend, FiActivity, FiShare2, FiBarChart2 } from "react-icons/fi";

export default function Functions() {
  const { t } = useTranslation();

  const simpleDesc = t("functionsSection.cards.simple.desc") as string;
  const loadDesc = t("functionsSection.cards.load.desc") as string;
  const shareDesc = t("functionsSection.cards.share.desc") as string;
  const reportsDesc = t("functionsSection.cards.reports.desc") as string;

  return (
    <section id="functions" className="py-24 px-6 md:px-16 bg-[var(--background_home)]/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text">
          {t("functionsSection.heading")}
        </h2>
        <p className="text-center mt-3 max-w-3xl mx-auto text-muted-foreground">{t("functionsSection.subheading")}</p>

        <div className="grid gap-6 md:gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]/30 focus-within:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] grid place-items-center">
                <FiSend className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.simple.title")}</h3>
            </div>
            <p className="text-muted-foreground mt-3">{simpleDesc}</p>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]/30 focus-within:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] grid place-items-center">
                <FiActivity className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.load.title")}</h3>
            </div>
            <p className="text-muted-foreground mt-3">{loadDesc}</p>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]/30 focus-within:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] grid place-items-center">
                <FiShare2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.share.title")}</h3>
            </div>
            <p className="text-muted-foreground mt-3">{shareDesc}</p>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]/30 focus-within:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] grid place-items-center">
                <FiBarChart2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.reports.title")}</h3>
            </div>
            <p className="text-muted-foreground mt-3">{reportsDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
