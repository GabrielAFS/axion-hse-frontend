import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Riscos Ocupacionais";

export const metadata: Metadata = {
  title: TITLE,
};

const OccupationalRisksPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OccupationalRisksPage;
