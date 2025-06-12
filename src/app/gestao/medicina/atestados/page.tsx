import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Atestados";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementTestimonialPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementTestimonialPage;
