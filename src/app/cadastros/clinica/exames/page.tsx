import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Famílias de Exames";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicExamsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicExamsPage;
