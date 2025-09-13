import { useTranslation } from "react-i18next";

export default function Functions() {
  const { t } = useTranslation();

  const interfaceItems = t("functionsSection.cards.interface.items", {
    returnObjects: true,
  }) as string[];
  const clientItems = t("functionsSection.cards.client.items", {
    returnObjects: true,
  }) as string[];
  const managementItems = t("functionsSection.cards.management.items", {
    returnObjects: true,
  }) as string[];
  const viewerItems = t("functionsSection.cards.viewer.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="functions" className="py-24 px-6 md:px-16 bg-[var(--background_home)]/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-text text-center">{t("functionsSection.heading")}</h2>
        <p className="text-center mt-3 max-w-3xl mx-auto text-muted-foreground">{t("functionsSection.subheading")}</p>

        <div className="grid gap-6 md:gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.interface.title")}</h3>
            <ul className="text-muted-foreground mt-3 space-y-2">
              {interfaceItems?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.client.title")}</h3>
            <ul className="text-muted-foreground mt-3 space-y-2">
              {clientItems?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.management.title")}</h3>
            <ul className="text-muted-foreground mt-3 space-y-2">
              {managementItems?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-text">{t("functionsSection.cards.viewer.title")}</h3>
            <ul className="text-muted-foreground mt-3 space-y-2">
              {viewerItems?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
