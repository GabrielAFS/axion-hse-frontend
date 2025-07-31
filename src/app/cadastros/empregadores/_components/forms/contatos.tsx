import { ShowcaseCollapsible } from "@/components/Layouts/showcase/collapsible";
import ContatosTable from "../tables/contatos-table";
import { Button } from "@/components/ui-elements/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  query?: string;
  page?: number;
}

// TODO: Consider this component as a client component
export default function ContatosForm({ query = "", page = 1 }: Props) {
  const formHref = "/";

  return (
    <ShowcaseCollapsible title={"Contatos"} className="!p-6.5">
      <div className="flex justify-end">
        <Link href={formHref} className="hidden md:block">
          <Button
            label="Novo"
            icon={<PlusIcon className="w-5" />}
            shape="rounded"
            size="small"
          />
        </Link>
      </div>
      <ContatosTable query={query} currentPage={page} />

      <Link href={formHref} className="fixed bottom-4 right-4 md:hidden">
        <Button
          label=""
          icon={<PlusIcon className="w-6" />}
          shape="full"
          size="small"
        />
      </Link>
    </ShowcaseCollapsible>
  );
}
