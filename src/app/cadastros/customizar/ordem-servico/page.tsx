import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Ordem de Serviço";

export const metadata: Metadata = {
  title: TITLE,
};

const ServiceOrderPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ServiceOrderPage;
