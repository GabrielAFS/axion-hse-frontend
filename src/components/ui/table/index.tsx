import { ReactElement } from "react";

import { TableHeader } from "./header";
import { TableBody } from "./body";
import { TableRow } from "./row";
import { TableHead } from "./head";

export default async function Table<T>({
  rows,
  cols,
  renderRowsDesktop,
  renderRowsMobile,
}: {
  rows: T[];
  cols: string[];
  renderRowsDesktop: (item: T) => ReactElement;
  renderRowsMobile?: (item: T) => ReactElement;
}) {
  const hasMobileRender = renderRowsMobile !== undefined;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-dark md:pt-0">
          {/* Mobile */}
          {hasMobileRender && (
            <div className="*:border-b *:border-gray-200 md:hidden [&_div:last-child]:border-0">
              {rows.map(renderRowsMobile)}
            </div>
          )}

          {/* Desktop */}
          <table
            className={`${hasMobileRender ? "hidden" : ""} min-w-full text-gray-900 dark:text-white md:table`}
          >
            <TableHeader className="rounded-lg text-left text-sm font-normal">
              <TableRow>
                {cols.map((col) => (
                  <TableHead key={col} scope="col">
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>{rows.map(renderRowsDesktop)}</TableBody>
          </table>
        </div>
      </div>
    </div>
  );
}
