import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "EPIs";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementEPIsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementEPIsPage;
