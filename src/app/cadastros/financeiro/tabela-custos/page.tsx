import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Tabela de Custos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialCostsTablePage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialCostsTablePage;
