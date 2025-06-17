import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { Select } from "@/components/FormElements/select";
import { getEmployers, getUnitsAndOutsourcingByEmployer } from "./fetch";

const SELECT_EMPLOYER_QUERY__KEY = "selected_employer";
const SELECT_UNIT_QUERY__KEY = "selected_unit";

type PropsType = {
  searchParams: Promise<{
    [SELECT_EMPLOYER_QUERY__KEY]?: string;
    [SELECT_UNIT_QUERY__KEY]?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_employer, selected_unit } = await searchParams;

  const employers = await getEmployers();
  const unitsAndOutsourcings =
    await getUnitsAndOutsourcingByEmployer(selected_employer);

  return (
    <>
      <div className="mb-8 flex w-full items-center gap-8">
        <Select
          label="Empregador"
          items={[
            {
              label: "Todos",
              value: "",
            },
            ...employers,
          ]}
          defaultValue=""
          className="grow-[2]"
          queryKey={SELECT_EMPLOYER_QUERY__KEY}
        />
        <Select
          label="Unidade / Terceirização"
          items={[
            {
              label: "Todos",
              value: "",
            },
            ...unitsAndOutsourcings,
          ]}
          defaultValue=""
          className="grow-[1]"
          queryKey={SELECT_UNIT_QUERY__KEY}
        />
      </div>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>
    </>
  );
}
