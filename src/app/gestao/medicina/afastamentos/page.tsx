import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Afastamentos";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementDeparturePage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementDeparturePage;
