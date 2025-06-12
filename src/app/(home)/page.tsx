import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { Select } from "@/components/FormElements/select";
import { getEmployers, getUnitsAndOutsourcingByEmployer } from "./fetch";
import { useEmployer } from "@/hooks/use-employers";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selectedEmployer, setSelectedEmployer } = useEmployer();

  const employers = await getEmployers();
  const unitsAndOutsourcings = await getUnitsAndOutsourcingByEmployer();

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
          defaultValue={selectedEmployer}
          className="grow-[2]"
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
        />
      </div>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>
    </>
  );
}
