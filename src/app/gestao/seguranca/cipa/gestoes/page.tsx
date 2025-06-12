import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Gestões";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementCIPAPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementCIPAPage;
