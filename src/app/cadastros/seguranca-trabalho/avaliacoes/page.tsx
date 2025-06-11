import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Avaliações Quantitativas";

export const metadata: Metadata = {
  title: TITLE,
};

const OSEvaluationsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSEvaluationsPage;
