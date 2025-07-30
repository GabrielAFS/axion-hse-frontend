"use client";

import FormLayout from "./form-layout";
import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";
import { FinanceiroData, FinanceiroSchema } from "../../lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Checkbox } from "@/components/FormElements/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";
import { updateEmployer } from "../../lib/actions";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

interface Props {
  employer: any; // TODO: Replace with actual employer type
}

export default function FinanceiroForm({ employer }: Props) {
  const navigate = useRouter();
  const isMobile = useIsMobile();
  const [isSaving, startIsSaving] = useTransition();

  const paymentMethods = [
    { label: "Boleto Bancário", value: "boleto" },
    { label: "Depósito", value: "deposito" },
    { label: "PIX", value: "pix" },
    { label: "Cartão de Crédito", value: "credito" },
    { label: "Cartão de Débito", value: "debito" },
    { label: "Cheque", value: "cheque" },
    { label: "Dinheiro", value: "dinheiro" },
  ];
  const paymentDays = [
    { label: "1º dia do mês", value: "1" },
    { label: "5º dia do mês", value: "5" },
    { label: "10º dia do mês", value: "10" },
    { label: "15º dia do mês", value: "15" },
    { label: "20º dia do mês", value: "20" },
    { label: "25º dia do mês", value: "25" },
    { label: "30º dia do mês", value: "30" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinanceiroData>({
    resolver: zodResolver(FinanceiroSchema),
  });

  const onSubmit = (data: FinanceiroData) => {
    startIsSaving(async () => {
      try {
        await updateEmployer(employer?.id, data);

        toast("Dados financeiros do empregador atualizados com sucesso!", {
          type: "success",
          position: "top-right",
          icon: <CheckBadgeIcon className="h-6 w-6 text-green-500" />,
          autoClose: 3000,
        });
      } catch (error) {
        console.log("Error creating employer:", error);
      }
    });
  };

  return (
    <FormLayout
      title="Financeiro"
      isSaving={isSaving}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="*:w-full *:xl:w-1/4">
        <Select
          {...register("tabelaPreco")}
          label="Tabela de Preço"
          items={[]}
          defaultValue=""
        />

        <Select
          {...register("faturarPor")}
          label="Faturar por"
          items={[
            { label: "Empregador", value: "empregador" },
            { label: "Unidade", value: "unidade" },
          ]}
          defaultValue="empregador"
        />

        <Select
          {...register("tipoContrato")}
          label="Tipo de Contrato"
          items={[
            { label: "N/A", value: "" },
            { label: "Mensalista", value: "mensal" },
            { label: "Pontual", value: "pontual" },
            { label: "Vidas", value: "vidas" },
            { label: "Convênio", value: "convenio" },
            { label: "Particular", value: "particular" },
            { label: "Permuta", value: "permuta" },
          ]}
        />
        <InputGroup
          {...register("vidas")}
          label="Vidas"
          type="number"
          placeholder=""
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/4">
        <Select
          {...register("centroCusto")}
          label="Centro de Custo Padrão"
          items={[]}
          defaultValue=""
        />

        <InputGroup
          {...register("emailFinanceiro")}
          label="E-mail Financeiro"
          type="email"
          placeholder="Entre com o e-mail financeiro"
        />
        <InputGroup
          {...register("whatsappFinanceiro")}
          label="Whatsapp Financeiro"
          type="tel"
          placeholder="Entre com o número do whatsapp financeiro"
        />

        <Select
          {...register("envioFatura")}
          label="Envio de faturamento"
          items={[
            { label: "E-mail", value: "email" },
            { label: "Whatsapp", value: "whatsapp" },
          ]}
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/2">
        <Select
          {...register("formaPagamentoExames")}
          label="Forma de Pagamento para Exames"
          items={paymentMethods}
          defaultValue=""
        />

        <Select
          {...register("diaPagamentoExames")}
          label="Dia de Pagamento para Exames"
          items={paymentDays}
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/2">
        <Select
          {...register("formaPagamentoServicos")}
          label="Forma de Pagamento para Serviços"
          items={paymentMethods}
        />

        <Select
          {...register("diaPagamentoServicos")}
          label="Dia de Pagamento para Serviços"
          items={paymentDays}
        />
      </fieldset>

      <fieldset
        className={`${isMobile ? "!flex-col-reverse" : ""} !items-center *:w-full *:xl:w-1/2`}
      >
        <div className="flex flex-col gap-5.5">
          <Checkbox
            {...register("cobrancaAtendimento")}
            label="Cobrança no atendimento?"
            withIcon="check"
          />

          <Checkbox
            {...register("cobrancaConvenio")}
            label="Cobrança por convênio?"
            withIcon="check"
          />
        </div>

        <Select {...register("convenio")} label="Convênio" items={[]} />
      </fieldset>
    </FormLayout>
  );
}
