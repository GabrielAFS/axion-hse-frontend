import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Centro de Custos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialCostCenterPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialCostCenterPage;
