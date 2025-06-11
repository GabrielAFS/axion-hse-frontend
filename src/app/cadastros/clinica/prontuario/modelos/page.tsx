import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Modelos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicRecordModelsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicRecordModelsPage;
