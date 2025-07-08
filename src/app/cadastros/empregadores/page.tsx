import { Metadata } from "next";
import EmployersTable from "./_components/table";

const TITLE = "Empregadores";

export const metadata: Metadata = {
  title: TITLE,
};

const EmployersPage = () => {
  return (
    <>
      <EmployersTable />
    </>
  );
};

export default EmployersPage;
