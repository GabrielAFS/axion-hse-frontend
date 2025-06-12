import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "FDS";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementFDSPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementFDSPage;
