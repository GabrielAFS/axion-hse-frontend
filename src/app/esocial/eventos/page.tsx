import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Eventos";

export const metadata: Metadata = {
  title: TITLE,
};

const ESocialEventsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ESocialEventsPage;
