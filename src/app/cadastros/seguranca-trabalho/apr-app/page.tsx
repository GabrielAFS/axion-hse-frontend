import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "APR/APP";

export const metadata: Metadata = {
  title: TITLE,
};

const OSAPRAPPPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OSAPRAPPPage;
