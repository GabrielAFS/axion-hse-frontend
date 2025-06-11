import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Categorias";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicRecordCategoriesPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicRecordCategoriesPage;
