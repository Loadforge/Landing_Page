"use client";
import { useTranslation } from "react-i18next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../ui/breadcrumb";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BreadCrumbs() {
  const { t } = useTranslation();

  return (
    <Breadcrumb className="flex w-full justify-center text-sm text-text space-x-4 xl:space-x-12 xl:text-lg ">
      <BreadcrumbItem>
        <BreadcrumbLink href="#home">{t("Home")}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#functions">{t("functions")}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#about">{t("about")}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#developers">
          {t("developers.heading")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href="https://github.com/Loadforge/docs"
          className="flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("docs")} <FaExternalLinkAlt className="ml-1" />
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
