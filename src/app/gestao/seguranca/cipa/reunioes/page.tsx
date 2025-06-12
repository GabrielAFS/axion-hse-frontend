import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

const TITLE = "Reuniões";

export const metadata: Metadata = {
  title: TITLE,
};

const ManagementMeetingsPage = () => {
  return (
    <>
      <Breadcrumb pageName={TITLE} />
    </>
  );
};

export default ManagementMeetingsPage;
