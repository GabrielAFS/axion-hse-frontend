"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_DATA, SidebarItem } from "../Layouts/sidebar/data";

interface BreadcrumbProps {
  pageName: string;
}

const flat =
  (
    mainParent?: SidebarItem[],
  ): ((o: SidebarItem) => SidebarItem[] | SidebarItem) =>
  (o?: SidebarItem): SidebarItem[] | SidebarItem => {
    if (!o) return [];
    return o.items ? o.items.flatMap(flat(mainParent)) : { ...o };
  };

const Breadcrumb = ({}: BreadcrumbProps) => {
  const titlesAndUrls = NAV_DATA.flatMap(flat()) as {
    title: string;
    url: string;
  }[];

  const path = usePathname();
  const pageName = titlesAndUrls.find((item) => item.url === path)?.title;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Início /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
