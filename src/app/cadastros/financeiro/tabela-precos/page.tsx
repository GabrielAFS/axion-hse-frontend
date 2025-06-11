import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Tabela de Preços";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialPriceTablePage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialPriceTablePage;
