import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Painel";

export const metadata: Metadata = {
  title: TITLE,
};

const ESocialPanelPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ESocialPanelPage;
