import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Profissionais";

export const metadata: Metadata = {
  title: TITLE,
};

const ProfessionalsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ProfessionalsPage;
