import { z } from "zod";

export type State = {
  errors?: {};
  message?: string | null;
};

export const newEmployerSchema = z.object({
  tipoInscricao: z.enum(["CNPJ", "CPF"], {
    required_error: "O tipo de inscrição é obrigatório.",
  }),
  identificacao: z
    .string()
    .min(1, "A identificação é obrigatória.")
    .max(50, "A identificação deve ter no máximo 50 caracteres."),
  email: z
    .string()
    .email("O e-mail deve ser válido.")
    .nonempty("O e-mail é obrigatório."),
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/, "O CEP deve estar no formato 00000-000.")
    .nonempty("O CEP é obrigatório."),
  endereco: z
    .string()
    .min(1, "O endereço é obrigatório.")
    .max(100, "O endereço deve ter no máximo 100 caracteres."),
  bairro: z
    .string()
    .min(1, "O bairro é obrigatório.")
    .max(50, "O bairro deve ter no máximo 50 caracteres."),
  cidade: z
    .string()
    .min(1, "A cidade é obrigatória.")
    .max(50, "A cidade deve ter no máximo 50 caracteres."),
  estado: z
    .string()
    .length(2, "O estado deve ter exatamente 2 caracteres.")
    .nonempty("O estado é obrigatório."),
  telefone: z
    .string()
    .regex(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      "O telefone deve estar no formato (00) 00000-0000.",
    )
    .optional(),
  segmento: z.string().optional(),
  cnpj: z
    .string()
    .regex(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
      "O CNPJ deve estar no formato 00.000.000/0000-00.",
    )
    .optional()
    .refine((value, ctx) => {
      if (ctx.parent.tipoInscricao === "CNPJ" && !value) {
        return false;
      }
      return true;
    }, "O CNPJ é obrigatório para o tipo de inscrição CNPJ."),
  cpf: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "O CPF deve estar no formato 000.000.000-00.",
    )
    .optional()
    .refine((value, ctx) => {
      if (ctx.parent.tipoInscricao === "CPF" && !value) {
        return false;
      }
      return true;
    }, "O CPF é obrigatório para o tipo de inscrição CPF."),
  razaoSocial: z
    .string()
    .min(1, "A razão social é obrigatória.")
    .max(100, "A razão social deve ter no máximo 100 caracteres.")
    .optional()
    .refine((value, ctx) => {
      if (ctx.parent.tipoInscricao === "CNPJ" && !value) {
        return false;
      }
      return true;
    }, "A razão social é obrigatória para o tipo de inscrição CNPJ."),
  nomeCompleto: z
    .string()
    .min(1, "O nome completo é obrigatório.")
    .max(100, "O nome completo deve ter no máximo 100 caracteres.")
    .optional()
    .refine((value, ctx) => {
      if (ctx.parent.tipoInscricao === "CPF" && !value) {
        return false;
      }
      return true;
    }, "O nome completo é obrigatório para o tipo de inscrição CPF."),
  nomeFantasia: z
    .string()
    .max(100, "O nome fantasia deve ter no máximo 100 caracteres.")
    .optional(),
});
