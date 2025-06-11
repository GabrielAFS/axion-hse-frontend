import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Textos Rápidos";

export const metadata: Metadata = {
  title: TITLE,
};

const QuickTextsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default QuickTextsPage;
