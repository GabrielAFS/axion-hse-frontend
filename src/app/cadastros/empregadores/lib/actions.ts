"use server";

import { revalidatePath } from "next/cache";
import { NewEmployerData } from "./schemas";

export type State = {
  errors?: {
    tipoInscricao?: string[];
    identificacao?: string[];
    email?: string[];
    cep?: string[];
    endereco?: string[];
    bairro?: string[];
    cidade?: string[];
    estado?: string[];
    telefone?: string[];
    whatsapp?: string[];
    segmento?: string[];
    cnpj?: string[];
    cpf?: string[];
    razaoSocial?: string[];
    nomeCompleto?: string[];
    nomeFantasia?: string[];
    cnpjEsocial?: string[];
  };
  message?: string | null;
};

export async function createEmployer(data: NewEmployerData) {
  console.log("Creating employer with data:", data);
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/cadastros/empregadores");
}
