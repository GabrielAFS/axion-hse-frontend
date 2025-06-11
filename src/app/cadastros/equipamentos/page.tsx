import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Equipamentos";

export const metadata: Metadata = {
  title: TITLE,
};

const EquipmentPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default EquipmentPage;
