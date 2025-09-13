import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text">{t("aboutSection.heading")}</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">{t("aboutSection.p1")}</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">{t("aboutSection.p2")}</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">{t("aboutSection.p3")}</p>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-[var(--separators)]/30 p-6 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("aboutSection.overview.title")}</h3>
            <ul className="mt-3 text-muted-foreground space-y-2">
              {(t("aboutSection.overview.items", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--separators)]/30 p-6 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("aboutSection.tech.title")}</h3>
            <ul className="mt-3 text-muted-foreground space-y-2">
              {(t("aboutSection.tech.items", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--separators)]/30 p-6 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("aboutSection.inDev.title")}</h3>
            <ul className="mt-3 text-muted-foreground space-y-2">
              {(t("aboutSection.inDev.items", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
