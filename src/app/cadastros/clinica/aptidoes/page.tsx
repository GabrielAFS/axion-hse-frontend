import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Aptidões";

export const metadata: Metadata = {
  title: TITLE,
};

const ClinicSkillsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ClinicSkillsPage;
