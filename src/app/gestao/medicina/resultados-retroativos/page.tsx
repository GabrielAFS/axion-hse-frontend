import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Resultados de Exames Retroativos";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementExamRetroactivesPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementExamRetroactivesPage;
