import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Fornecedores";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialSuppliersPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialSuppliersPage;
