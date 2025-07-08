import { Metadata } from "next";
import EmployersTable from "./_components/table";
import { Button } from "@/components/ui-elements/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const TITLE = "Empregadores";

export const metadata: Metadata = {
  title: TITLE,
};

const EmployersPage = () => {
  const formHref = "/cadastros/empregadores/novo";

  return (
    <>
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
      <EmployersTable />

      <Link href={formHref} className="fixed bottom-4 right-4 md:hidden">
        <Button
          label=""
          icon={<PlusIcon className="w-6" />}
          shape="full"
          size="small"
        />
      </Link>
    </>
  );
};

export default EmployersPage;
