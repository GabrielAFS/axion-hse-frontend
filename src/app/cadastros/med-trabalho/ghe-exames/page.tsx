import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "GHE Exames";

export const metadata: Metadata = {
  title: TITLE,
};

const OMGHEExamsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OMGHEExamsPage;
