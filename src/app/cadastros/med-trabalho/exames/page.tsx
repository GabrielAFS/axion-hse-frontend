import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Exames";

export const metadata: Metadata = {
  title: TITLE,
};

const OMExamsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OMExamsPage;
