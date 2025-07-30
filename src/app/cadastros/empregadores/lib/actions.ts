"use server";

import { revalidatePath } from "next/cache";
import { FinanceiroData, NewEmployerData } from "./schemas";

type UpdateEmployerData = Partial<NewEmployerData & FinanceiroData>;

export async function createEmployer(data: NewEmployerData) {
  console.log("Creating employer with data:", data);
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/cadastros/empregadores");
}

export async function updateEmployer(id: string, data: UpdateEmployerData) {
  console.log(`Updating employer with ID ${id} and data:`, data);
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/cadastros/empregadores");
}
