import Table from "@/components/ui/table";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { TableRow } from "@/components/ui/table/row";
import { TableCell } from "@/components/ui/table/cell";
import Pagination from "@/components/ui/pagination";
import Link from "next/link";
import { getEmployerContacts } from "../../fetch";

const COLUMNS = ["Nome", "Departamento", "Telefone", "E-mail", "Ações"];

const spanSelector = "[&_div>span:first-child]";

export default async function ContatosTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { contacts, totalPages } = await getEmployerContacts(
    query,
    currentPage,
  );

  return (
    <>
      <Table
        rows={contacts}
        cols={COLUMNS}
        renderRowsMobile={(contact) => (
          <div
            key={contact.id}
            className={`p-4 *:flex *:justify-between ${spanSelector}:font-medium ${spanSelector}:text-gray-900 ${spanSelector}:dark:text-white`}
          >
            <div>
              <span>{COLUMNS[0]}:</span>
              <span>{contact.nome}</span>
            </div>
            <div>
              <span>{COLUMNS[1]}:</span>
              <span>{contact.departamento}</span>
            </div>
            <div>
              <span>{COLUMNS[2]}:</span>
              <span>{contact.telefone}</span>
            </div>
            <div>
              <span>{COLUMNS[3]}:</span>
              <span>{contact.email}</span>
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
            <TableCell>{contact.nome}</TableCell>
            <TableCell>{contact.departamento}</TableCell>
            <TableCell>{contact.telefone}</TableCell>
            <TableCell>{contact.email}</TableCell>
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
