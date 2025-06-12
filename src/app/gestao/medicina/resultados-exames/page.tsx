import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Resultados de Exames";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementExamResultsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementExamResultsPage;
