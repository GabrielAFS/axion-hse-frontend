import Table from "@/components/ui/table";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { TableRow } from "@/components/ui/table/row";
import { TableCell } from "@/components/ui/table/cell";
import Pagination from "@/components/ui/pagination";
import Link from "next/link";
import { getEmployerServiceUnits } from "../../fetch";

const COLUMNS = ["Unidade de Atendimento", "Tabela de Preço", "Ações"];

const spanSelector = "[&_div>span:first-child]";

export default async function UnidadesAtendimentoTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { service_units, totalPages } = await getEmployerServiceUnits(
    query,
    currentPage,
  );

  return (
    <>
      <Table
        rows={service_units}
        cols={COLUMNS}
        renderRowsMobile={(contact) => (
          <div
            key={contact.id}
            className={`p-4 *:flex *:justify-between ${spanSelector}:font-medium ${spanSelector}:text-gray-900 ${spanSelector}:dark:text-white`}
          >
            <div>
              <span>{COLUMNS[0]}:</span>
              <span>{contact.unidade_atendimento}</span>
            </div>
            <div>
              <span>{COLUMNS[1]}:</span>
              <span>{contact.tabela_preco}</span>
            </div>
            <div className="mt-2 !justify-end *:w-4">
              <Link href={`/cadastros/empregadores/${contact.id}/editar`}>
                <PencilSquareIcon />
              </Link>
              <TrashIcon className="ml-2" />
            </div>
          </div>
        )}
        renderRowsDesktop={(contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.unidade_atendimento}</TableCell>
            <TableCell>{contact.tabela_preco}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Link href={`/cadastros/empregadores/${contact.id}/editar`}>
                  <PencilSquareIcon className="w-4" />
                </Link>
                <TrashIcon className="ml-2 w-4" />
              </div>
            </TableCell>
          </TableRow>
        )}
      />

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
