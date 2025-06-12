import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "ASO Avulso";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementASOAvulsoPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementASOAvulsoPage;
