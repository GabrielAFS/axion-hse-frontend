import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Serviços";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicFinancialServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicFinancialServicesPage;
