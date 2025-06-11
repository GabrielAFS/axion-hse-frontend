import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Textos Padrão";

export const metadata: Metadata = {
  title: TITLE,
};

const DefaultTextsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default DefaultTextsPage;
