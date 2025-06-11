import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Ambientes de Trabalho";

export const metadata: Metadata = {
  title: TITLE,
};

const OSEnvironmentsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSEnvironmentsPage;
