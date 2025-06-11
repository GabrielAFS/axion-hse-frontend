import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Empregadores";

export const metadata: Metadata = {
  title: TITLE,
};

const EmployersPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default EmployersPage;
