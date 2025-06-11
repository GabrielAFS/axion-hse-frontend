import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Guichês";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicWindowsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicWindowsPage;
