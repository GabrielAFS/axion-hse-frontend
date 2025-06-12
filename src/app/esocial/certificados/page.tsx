import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Certificados";

export const metadata: Metadata = {
  title: TITLE,
};

const ESocialCertificatesPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ESocialCertificatesPage;
