import Table from "@/components/ui/table";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { TableRow } from "@/components/ui/table/row";
import { TableCell } from "@/components/ui/table/cell";
import Pagination from "@/components/ui/pagination";
import { getEmployers } from "../../fetch";
import Link from "next/link";

const COLUMNS = [
  "Identificação",
  "Razão Social",
  "Situação",
  "Tipo",
  "Cidade",
  "UF",
  "Ações",
];

const spanSelector = "[&_div>span:first-child]";

export default async function EmployersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { employers, totalPages } = await getEmployers(query, currentPage);

  return (
    <>
      <Table
        rows={employers}
        cols={COLUMNS}
        renderRowsMobile={(employer) => (
          <div
            key={employer.id}
            className={`p-4 *:flex *:justify-between ${spanSelector}:font-medium ${spanSelector}:text-gray-900 ${spanSelector}:dark:text-white`}
          >
            <div>
              <span>{COLUMNS[0]}:</span>
              <span>{employer.identificacao}</span>
            </div>
            <div>
              <span>{COLUMNS[1]}:</span>
              <span>{employer.razaoSocial}</span>
            </div>
            <div>
              <span>{COLUMNS[2]}:</span>
              <span>{employer.situacao}</span>
            </div>
            <div>
              <span>{COLUMNS[3]}:</span>
              <span>{employer.tipo}</span>
            </div>
            <div>
              <span>{COLUMNS[4]}:</span>
              <span>{employer.cidade}</span>
            </div>
            <div>
              <span>{COLUMNS[5]}:</span>
              <span>{employer.uf}</span>
            </div>
            <div className="mt-2 !justify-end *:w-4">
              <PencilSquareIcon />
              <TrashIcon className="ml-2" />
            </div>
          </div>
        )}
        renderRowsDesktop={(employer) => (
          <TableRow key={employer.id}>
            <TableCell>{employer.identificacao}</TableCell>
            <TableCell>{employer.razaoSocial}</TableCell>
            <TableCell>{employer.situacao}</TableCell>
            <TableCell>{employer.tipo}</TableCell>
            <TableCell>{employer.cidade}</TableCell>
            <TableCell>{employer.uf}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Link href={`/cadastros/empregadores/${employer.id}/editar`}>
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
