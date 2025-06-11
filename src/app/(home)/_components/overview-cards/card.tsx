import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { JSX, SVGProps } from "react";
import { IOverviewDataValue } from "../../_types/overview-cards";

interface PropsType {
  label: string;
  data: IOverviewDataValue;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export function OverviewCard({ label, data, Icon }: PropsType) {
  const percentual = (data?.percentual ?? 0) * 100;
  const isDecreasing = percentual < 50;

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon />

      <div className="mt-6 flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>

          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>

        <dl
          className={cn(
            "text-sm font-medium",
            isDecreasing ? "text-red" : "text-green",
          )}
        >
          <dt className="flex items-center gap-1.5">
            {percentual}%
            {isDecreasing ? (
              <ArrowDownIcon aria-hidden />
            ) : (
              <ArrowUpIcon aria-hidden />
            )}
          </dt>

          <dd className="sr-only">
            {label} {isDecreasing ? "Decreased" : "Increased"} by {percentual}%
          </dd>
        </dl>
      </div>
    </div>
  );
}
