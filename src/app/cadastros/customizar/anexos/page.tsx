import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Anexos Padrão";

export const metadata: Metadata = {
  title: TITLE,
};

const CustomAttachmentPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default CustomAttachmentPage;
