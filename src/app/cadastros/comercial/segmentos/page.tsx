import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Segmentos";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicCommercialSegmentsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicCommercialSegmentsPage;
