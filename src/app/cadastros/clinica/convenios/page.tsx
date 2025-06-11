import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Convênios";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicAgreementPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicAgreementPage;
