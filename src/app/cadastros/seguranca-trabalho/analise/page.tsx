import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Análise Ergonômica";

export const metadata: Metadata = {
  title: TITLE,
};

const OSAnalysisPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSAnalysisPage;
