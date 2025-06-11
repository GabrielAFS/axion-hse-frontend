import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Materiais";

export const metadata: Metadata = {
  title: TITLE,
};

const StockMaterialsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default StockMaterialsPage;
