import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Salas";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicRoomsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicRoomsPage;
