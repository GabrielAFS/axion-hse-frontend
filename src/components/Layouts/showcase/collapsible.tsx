"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import type { ReactNode } from "react";

type PropsType = {
  title: string;
  children: ReactNode;
  className?: string;
  initiallyOpen?: boolean;
};

export function ShowcaseCollapsible({
  title,
  children,
  className,
  initiallyOpen = false,
}: PropsType) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div
        className={cn(
          `cursor-pointer px-4 py-4 font-medium text-dark dark:text-white sm:px-6 xl:px-7.5`,
          isOpen ? "border-b border-stroke dark:border-dark-3" : "",
        )}
        onClick={toggleCollapse}
      >
        <h2 className="flex items-center justify-between">
          {title}
          <ChevronDownIcon
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0",
            )}
            aria-hidden="true"
          />
        </h2>
      </div>

      {isOpen && (
        <div className={cn("p-4 sm:p-6 xl:p-10", className)}>{children}</div>
      )}
    </div>
  );
}
