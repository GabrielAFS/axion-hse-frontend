import { Select } from "@/components/FormElements/select";
import { getEmployers, getUnitsAndOutsourcingByEmployer } from "../../fetch";
import { SELECT_EMPLOYER_QUERY_KEY, SELECT_UNIT_QUERY_KEY } from "./constants";

type PropsType = {
  [SELECT_EMPLOYER_QUERY_KEY]?: string;
  [SELECT_UNIT_QUERY_KEY]?: string;
};

export async function FilterSelects({ selected_employer }: PropsType) {
  const employers = await getEmployers();
  const unitsAndOutsourcings =
    await getUnitsAndOutsourcingByEmployer(selected_employer);

  return (
    <div className="mb-8 flex w-full flex-col items-center gap-8 md:flex-row">
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
        className="w-full md:w-auto md:grow-[2]"
        queryKey={SELECT_EMPLOYER_QUERY_KEY}
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
        className="w-full md:w-auto md:grow-[1]"
        queryKey={SELECT_UNIT_QUERY_KEY}
      />
    </div>
  );
}
