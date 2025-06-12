import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Envios";

export const metadata: Metadata = {
  title: TITLE,
};

const ESocialDispatchPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ESocialDispatchPage;
