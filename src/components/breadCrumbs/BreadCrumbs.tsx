import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../ui/breadcrumb";
import { FaExternalLinkAlt } from "react-icons/fa"; 
export default function BreadCrumbs() {
  return (
    <Breadcrumb className="flex w-full justify-between text-2xl  text-text space-x-20 ">
      <BreadcrumbItem>
        <BreadcrumbLink href="#home">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#functions">Functions</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#tecnologies">Tecnologies</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#about">About</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="https://example.com/docs" className="flex" target="_blank" rel="noopener noreferrer">
          Docs <FaExternalLinkAlt className="ml-1" />
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
