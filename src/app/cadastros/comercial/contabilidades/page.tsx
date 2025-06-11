import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Contabilidades";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicCommercialAccountingPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicCommercialAccountingPage;
