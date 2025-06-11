import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const overviewData = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="S-2210"
        data={overviewData["s-2210"]}
        Icon={icons.Bolt}
      />

      <OverviewCard
        label="S-2220"
        data={overviewData["s-2220"]}
        Icon={icons.Hearth}
      />

      <OverviewCard
        label="S-2240"
        data={overviewData["s-2240"]}
        Icon={icons.Users}
      />

      <OverviewCard
        label="S-3000"
        data={overviewData["s-3000"]}
        Icon={icons.Trash}
      />
    </div>
  );
}
