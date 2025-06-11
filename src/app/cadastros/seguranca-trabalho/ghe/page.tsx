import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "GHE Riscos";

export const metadata: Metadata = {
  title: TITLE,
};

const OSGHEPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSGHEPage;
