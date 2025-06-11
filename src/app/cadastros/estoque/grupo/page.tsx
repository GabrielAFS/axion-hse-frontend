import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Grupo de Materiais";

export const metadata: Metadata = {
  title: TITLE,
};

const StockMaterialsGroupPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default StockMaterialsGroupPage;
