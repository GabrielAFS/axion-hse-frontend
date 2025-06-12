import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Treinamentos";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementTrainingPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementTrainingPage;
