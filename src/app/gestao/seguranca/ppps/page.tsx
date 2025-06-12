import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "PPPs";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementPPPsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementPPPsPage;
