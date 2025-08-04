import { z } from "zod";

export const NewEmployerSchema = z.object({
  tipoInscricao: z.enum(["CNPJ", "CPF"], {
    error: "O tipo de inscrição é obrigatório.",
  }),
  cnpjEsocial: z.enum(["base", "completo"], {
    error: "O tipo de inscrição é obrigatório.",
  }),
  identificacao: z
    .string()
    .min(1, "A identificação é obrigatória.")
    .max(50, "A identificação deve ter no máximo 50 caracteres."),
  email: z
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
  telefone: z.string().optional(),
  whatsapp: z.string().optional(),
  segmento: z.string().optional(),
  cnpj: z
    .string()
    .regex(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
      "O CNPJ deve estar no formato 00.000.000/0000-00.",
    )
    .optional(),
  // .refine((value, ctx) => {
  //   console.log(value, ctx);
  //   if (ctx.parent.tipoInscricao === "CNPJ" && !value) {
  //     return false;
  //   }
  //   return true;
  // }, "O CNPJ é obrigatório para o tipo de inscrição CNPJ."),
  cpf: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "O CPF deve estar no formato 000.000.000-00.",
    )
    .optional(),
  // .refine((value, ctx) => {
  //   if (ctx.parent.tipoInscricao === "CPF" && !value) {
  //     return false;
  //   }
  //   return true;
  // }, "O CPF é obrigatório para o tipo de inscrição CPF."),
  razaoSocial: z
    .string()
    .min(1, "A razão social é obrigatória.")
    .max(100, "A razão social deve ter no máximo 100 caracteres.")
    .optional(),
  // .refine((value, ctx) => {
  //   if (ctx.parent.tipoInscricao === "CNPJ" && !value) {
  //     return false;
  //   }
  //   return true;
  // }, "A razão social é obrigatória para o tipo de inscrição CNPJ."),
  nomeCompleto: z
    .string()
    .min(1, "O nome completo é obrigatório.")
    .max(100, "O nome completo deve ter no máximo 100 caracteres.")
    .optional(),
  // .refine((value, ctx) => {
  //   if (ctx.parent.tipoInscricao === "CPF" && !value) {
  //     return false;
  //   }
  //   return true;
  // }, "O nome completo é obrigatório para o tipo de inscrição CPF."),
  nomeFantasia: z
    .string()
    .max(100, "O nome fantasia deve ter no máximo 100 caracteres.")
    .optional(),
});

export type NewEmployerData = z.infer<typeof NewEmployerSchema>;

export const FinanceiroSchema = z.object({
  tabelaPreco: z.string().nonempty("A tabela de preço é obrigatória."),
  faturarPor: z.enum(["empregador", "unidade"], {
    error: "O campo 'Faturar por' é obrigatório.",
  }),
  tipoContrato: z.enum(
    ["", "mensal", "pontual", "vidas", "convenio", "particular", "permuta"],
    {
      error: "O tipo de contrato é obrigatório.",
    },
  ),
  vidas: z
    .number({
      error: "O campo 'Vidas' deve ser um número.",
    })
    .min(0, "O número de vidas deve ser maior ou igual a 0.")
    .optional(),
  centroCusto: z.string(),
  emailFinanceiro: z
    .email("O e-mail financeiro deve ser válido.")
    .nonempty("O e-mail financeiro é obrigatório."),
  whatsappFinanceiro: z
    .string()
    .regex(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      "O número do WhatsApp deve estar no formato (00) 00000-0000.",
    )
    .optional(),
  envioFatura: z.enum(["email", "whatsapp"], {
    error: "O envio de faturamento é obrigatório.",
  }),
  formaPagamentoExames: z.string(),
  diaPagamentoExames: z
    .string()
    .nonempty("O dia de pagamento para exames é obrigatório."),
  formaPagamentoServicos: z
    .string()
    .nonempty("A forma de pagamento para serviços é obrigatória."),
  diaPagamentoServicos: z.string(),
  cobrancaAtendimento: z.boolean().optional(),
  cobrancaConvenio: z.boolean().optional(),
  convenio: z.string().optional(),
});

export type FinanceiroData = z.infer<typeof FinanceiroSchema>;

export const ObservacoesSchema = z.object({
  obsPrincipais: z.string().max(999, "Máximo de 999 caracteres"),
  obsParaAtendimento: z.string().max(999, "Máximo de 999 caracteres"),
});

export type ObservacoesData = z.infer<typeof ObservacoesSchema>;

export const ResponsavelPcmsoSchema = z.object({
  tituloResponsavelPcmso: z.string(),
  nomeResponsavelPcmso: z.string(),
  cpfResponsavelPcmso: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "O CPF deve estar no formato 000.000.000-00.",
    )
    .optional(),
  crmResponsavelPcmso: z.string(),
  estadoResponsavelPcmso: z
    .string()
    .length(2, "O estado deve ter exatamente 2 caracteres."),
});

export type ResponsavelPcmsoData = z.infer<typeof ResponsavelPcmsoSchema>;
