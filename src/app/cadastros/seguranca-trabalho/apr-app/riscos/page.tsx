import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Riscos x Atividades";

export const metadata: Metadata = {
  title: TITLE,
};

const OSRisksPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSRisksPage;
