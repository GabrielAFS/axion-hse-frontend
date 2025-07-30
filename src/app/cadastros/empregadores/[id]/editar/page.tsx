import React from "react";
import EditEmployerForm from "../../_components/forms/edit-form";
import { getEmployerById } from "../../fetch";
import { notFound } from "next/navigation";

export default async function EditEmployerPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const employer = await getEmployerById(id); // Assume this function fetches the employer data by ID

  if (!employer) {
    notFound();
  }
  return <EditEmployerForm employer={employer} />;
}
