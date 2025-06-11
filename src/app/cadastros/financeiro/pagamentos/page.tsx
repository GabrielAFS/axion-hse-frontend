import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Condições de Pagamentos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialPaymentsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialPaymentsPage;
