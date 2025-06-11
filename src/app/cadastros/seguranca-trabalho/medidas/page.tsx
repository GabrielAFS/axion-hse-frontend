import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Medidas";

export const metadata: Metadata = {
  title: TITLE,
};

const OSMeasuresPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSMeasuresPage;
