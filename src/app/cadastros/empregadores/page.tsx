import Table from "@/components/ui/table";
import { Metadata } from "next";
import {
  TrashIcon,
  PencilIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { TableRow } from "@/components/ui/table/row";
import { TableCell } from "@/components/ui/table/cell";

const TITLE = "Empregadores";

export const metadata: Metadata = {
  title: TITLE,
};

const EmployersPage = () => {
  return (
    <>
      <Table
        rows={[
          {
            id: "Empresa A",
            razaoSocial: "Empresa A LTDA",
            situacao: "Ativo",
            tipo: "CPF",
            cidade: "São Paulo",
            uf: "SP",
          },
          {
            id: "Empresa B",
            razaoSocial: "Empresa B LTDA",
            situacao: "Inativo",
            tipo: "CNPJ",
            cidade: "Rio de Janeiro",
            uf: "RJ",
          },
        ]}
        cols={[
          "Identificação",
          "Razão Social",
          "Situação",
          "Tipo",
          "Cidade",
          "UF",
          "Ações",
        ]}
        renderRowsMobile={(employer) => (
          <div key={employer.id} className="p-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                ID:
              </span>
              <span>{employer.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                Razão Social:
              </span>
              <span>{employer.razaoSocial}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                Situação:
              </span>
              <span>{employer.situacao}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                Tipo:
              </span>
              <span>{employer.tipo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                Cidade:
              </span>
              <span>{employer.cidade}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                UF:
              </span>
              <span>{employer.uf}</span>
            </div>
            <div className="mt-2 flex justify-end">
              <PencilSquareIcon className="w-4" />
              <TrashIcon className="ml-2 w-4" />
            </div>
          </div>
        )}
        renderRowsDesktop={(employer) => (
          <TableRow key={employer.id}>
            <TableCell>{employer.id}</TableCell>
            <TableCell>{employer.razaoSocial}</TableCell>
            <TableCell>{employer.situacao}</TableCell>
            <TableCell>{employer.tipo}</TableCell>
            <TableCell>{employer.cidade}</TableCell>
            <TableCell>{employer.uf}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <PencilSquareIcon className="w-4" />
                <TrashIcon className="ml-2 w-4" />
              </div>
            </TableCell>
          </TableRow>
        )}
      />
    </>
  );
};

export default EmployersPage;
