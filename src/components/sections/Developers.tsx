import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Dev = {
  name: string;
  role: string;
  github: string;
  linkedin: string;
  image?: string;
};

const developers: Dev[] = [
  {
    name: "Jean Lima",
    role: "Full Stack",
    github: "https://github.com/JeanLima2112",
    linkedin: "https://www.linkedin.com/in/ojeanlima/",
    image: "/devs/jean.png",
  },
  {
    name: "Danillo Leal",
    role: "Full Stack",
    github: "https://github.com/danilloyal",
    linkedin: "https://www.linkedin.com/in/danillomartinsleal/",
    image: "/devs/danillo.png",
  },
];

export default function Developers() {
  const { t } = useTranslation();

  return (
    <section id="developers" className="py-24 px-6 md:px-16 bg-[var(--background_home)]/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-text text-center">
          {t("developers.heading")}
        </h2>
        <p className="text-center mt-3 max-w-3xl mx-auto text-muted-foreground">
          {t("developers.subheading")}
        </p>

        <div className="grid gap-6 md:gap-8 mt-12 md:grid-cols-2">
          {developers.map((dev) => (
            <article
              key={dev.github}
              className="group p-6 rounded-xl border border-[var(--separators)]/30 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border border-[var(--separators)]/30 bg-muted/40">
                  {dev.image ? (
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-muted-foreground text-lg">{dev.name.charAt(0)}</div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text">{dev.name}</h3>
                  <p className="text-sm text-muted-foreground">{dev.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--separators)]/30 px-3 py-2 text-sm text-text hover:bg-card/60 transition-colors"
                    aria-label={`${dev.name} GitHub`}
                  >
                    <FaGithub className="h-4 w-4" /> {t("developers.labels.github")}
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--separators)]/30 px-3 py-2 text-sm text-text hover:bg-card/60 transition-colors"
                    aria-label={`${dev.name} LinkedIn`}
                  >
                    <FaLinkedin className="h-4 w-4" /> {t("developers.labels.linkedin")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
