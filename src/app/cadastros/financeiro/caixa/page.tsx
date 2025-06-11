import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Caixa / Bancos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialCashPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialCashPage;
