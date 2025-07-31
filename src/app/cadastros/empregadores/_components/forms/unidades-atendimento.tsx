import { ShowcaseCollapsible } from "@/components/Layouts/showcase/collapsible";
import { Button } from "@/components/ui-elements/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import UnidadesAtendimentoTable from "../tables/unidades-atendimento-table";

interface Props {
  query?: string;
  page?: number;
}

// TODO: Consider this component as a client component
export default function UnidadeAtendimentoForm({
  query = "",
  page = 1,
}: Props) {
  const formHref = "/";

  return (
    <ShowcaseCollapsible
      title={"Tabelas por Unidade de Atendimento"}
      className="!p-6.5"
    >
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
      <UnidadesAtendimentoTable query={query} currentPage={page} />

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
