import React from "react";
import EditEmployerForm from "../../_components/forms/edit-form";
import { getEmployerById } from "../../fetch";
import { notFound } from "next/navigation";

// TODO: How to handle multiple tables using pagination in this page?
export default async function EditEmployerPage(props: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const id = params.id;

  const employer = await getEmployerById(id); // Assume this function fetches the employer data by ID

  if (!employer) {
    notFound();
  }
  return <EditEmployerForm employer={employer} searchParams={searchParams} />;
}
