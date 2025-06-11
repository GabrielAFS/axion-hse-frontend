import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Treinamentos";

export const metadata: Metadata = {
  title: TITLE,
};

const OSTrainingsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSTrainingsPage;
