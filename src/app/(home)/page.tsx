import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { FilterSelects } from "./_components/filter-selects";
import {
  SELECT_EMPLOYER_QUERY_KEY,
  SELECT_UNIT_QUERY_KEY,
} from "./_components/filter-selects/constants";
import { FilterSelectsSkeleton } from "./_components/filter-selects/skeleton";

type PropsType = {
  searchParams: Promise<{
    [SELECT_EMPLOYER_QUERY_KEY]?: string;
    [SELECT_UNIT_QUERY_KEY]?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_employer, selected_unit } = await searchParams;

  return (
    <>
      <Suspense fallback={<FilterSelectsSkeleton />}>
        <FilterSelects
          selected_employer={selected_employer}
          selected_unit={selected_unit}
        />
      </Suspense>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>
    </>
  );
}
