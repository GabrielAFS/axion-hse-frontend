import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Trabalhadores";

export const metadata: Metadata = {
  title: TITLE,
};

const WorkersPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default WorkersPage;
