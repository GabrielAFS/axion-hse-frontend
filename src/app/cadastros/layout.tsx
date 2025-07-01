import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb />
      <div>{children}</div>
    </>
  );
}
