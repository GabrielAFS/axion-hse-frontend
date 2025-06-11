import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Documentos";

export const metadata: Metadata = {
  title: TITLE,
};

const OSDocumentsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSDocumentsPage;
