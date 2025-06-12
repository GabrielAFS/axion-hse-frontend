import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Ordens de Serviço";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementServiceOrdersPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementServiceOrdersPage;
