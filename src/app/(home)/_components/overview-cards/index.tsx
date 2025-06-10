import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { views, profit, products, users } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="S-2210"
        data={{
          ...views,
          value: compactFormat(views.value),
        }}
        Icon={icons.Bolt}
      />

      <OverviewCard
        label="S-2220"
        data={{
          ...profit,
          value: "$" + compactFormat(profit.value),
        }}
        Icon={icons.Hearth}
      />

      <OverviewCard
        label="S-2240"
        data={{
          ...products,
          value: compactFormat(products.value),
        }}
        Icon={icons.Users}
      />

      <OverviewCard
        label="S-3000"
        data={{
          ...users,
          value: compactFormat(users.value),
        }}
        Icon={icons.Trash}
      />
    </div>
  );
}
