"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_DATA, SidebarItem } from "./data";
import { ArrowLeftIcon, ChevronUp } from "./icons";
import { MenuItem } from "./menu-item";
import { useSidebarContext } from "./sidebar-context";

export function Sidebar() {
  const pathname = usePathname();
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const renderListItem = (item: SidebarItem) => {
    if (item.items?.length) {
      return (
        <div key={item?.url ?? item.title}>
          <MenuItem
            isActive={item.items.some(({ url }) => url === pathname)}
            onClick={() => toggleExpanded(item.title)}
          >
            {item.icon && (
              <item.icon className="size-6 shrink-0" aria-hidden="true" />
            )}

            <span className="text-left">{item.title}</span>

            <ChevronUp
              className={cn(
                "ml-auto rotate-180 transition-transform duration-200",
                expandedItems.includes(item.title) && "rotate-0",
              )}
              aria-hidden="true"
            />
          </MenuItem>

          {expandedItems.includes(item.title) && (
            <ul
              className="ml-9 mr-0 space-y-1.5 pb-[15px] pr-0 pt-2"
              role="menu"
            >
              {item.items.map((subItem) => renderListItem(subItem))}
            </ul>
          )}
        </div>
      );
    }

    const href =
      "url" in item
        ? item.url + ""
        : "/" + item.title.toLowerCase().split(" ").join("-");

    return (
      <li key={item?.url ?? item.title}>
        <MenuItem
          className="flex items-center gap-3 py-3"
          as="link"
          href={href}
          isActive={pathname === href}
        >
          {item.icon && (
            <item.icon className="size-6 shrink-0" aria-hidden="true" />
          )}

          <span className="text-left">{item.title}</span>
        </MenuItem>
      </li>
    );
  };

  useEffect(() => {
    // Keep collapsible open, when it's subpage is active
    NAV_DATA.some((item) => {
      return item?.items?.some((subItem) => {
        if (subItem.url === pathname) {
          if (!expandedItems.includes(item.title)) {
            toggleExpanded(item.title);
          }

          // Break the loop
          return true;
        }
      });
    });
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "max-w-[290px] overflow-hidden border-r border-gray-200 bg-white transition-[width] duration-200 ease-linear dark:border-gray-800 dark:bg-gray-dark",
          isMobile ? "fixed bottom-0 top-0 z-50" : "sticky top-0 h-screen",
          isOpen ? "w-full" : "w-0",
        )}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="flex h-full flex-col py-10 pl-[25px] pr-[7px]">
          <div className="relative pr-4.5">
            <Link
              href={"/"}
              onClick={() => isMobile && toggleSidebar()}
              className="px-0 py-2.5 min-[850px]:py-0"
            >
              <Logo />
            </Link>

            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="absolute left-3/4 right-4.5 top-1/2 -translate-y-1/2 text-right"
              >
                <span className="sr-only">Close Menu</span>

                <ArrowLeftIcon className="ml-auto size-7" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <div className="custom-scrollbar mt-6 flex-1 overflow-y-auto pr-3 min-[850px]:mt-10">
            <div className="mb-6">
              <nav role="navigation">
                <ul className="space-y-2">
                  {NAV_DATA.map((item) => renderListItem(item))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
