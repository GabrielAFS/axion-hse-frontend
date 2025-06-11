import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Jornadas";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicJourneysPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicJourneysPage;
