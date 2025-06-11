import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Terceirização";

export const metadata: Metadata = {
  title: TITLE,
};

const OutsourcingPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default OutsourcingPage;
