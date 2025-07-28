"use client";

import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";
import { Button } from "@/components/ui-elements/button";
import { ShowcaseCollapsible } from "@/components/Layouts/showcase/collapsible";
import { getBrazilianStates } from "../../fetch";
import { createEmployer } from "../../lib/actions";
import { NewEmployerData, NewEmployerSchema } from "../../lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import FormLayout from "./form-layout";

export default function NewEmployerForm() {
  const navigate = useRouter();
  const [isSaving, startIsSaving] = useTransition();

  const states = getBrazilianStates();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewEmployerData>({
    resolver: zodResolver(NewEmployerSchema),
  });

  const tipoInscricao = watch("tipoInscricao");

  const onSubmit = (data: NewEmployerData) => {
    startIsSaving(async () => {
      try {
        await createEmployer(data);

        toast("Empregador criado com sucesso!", {
          type: "success",
          position: "top-right",
          icon: <CheckBadgeIcon className="h-6 w-6 text-green-500" />,
          autoClose: 3000,
          onClose: () => {
            navigate.replace("/cadastros/empregadores");
          },
        });
      } catch (error) {
        console.log("Error creating employer:", error);
      }
    });
  };

  return (
    <FormLayout
      title="Dados Cadastrais"
      initiallyOpen={true}
      isSaving={isSaving}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="*:w-full *:xl:w-1/3">
        <Select
          {...register("tipoInscricao")}
          id="tipoInscricao"
          label="Tipo Inscrição"
          items={[
            { label: "CNPJ", value: "CNPJ" },
            { label: "CPF", value: "CPF" },
          ]}
          defaultValue="CNPJ"
        />

        {tipoInscricao === "CNPJ" ? (
          <InputGroup
            {...register("cnpj")}
            id="cnpj"
            label="CNPJ"
            type="text"
            placeholder="Entre com o CNPJ"
            required
          />
        ) : (
          <InputGroup
            {...register("cpf")}
            id="cpf"
            label="CPF"
            type="text"
            placeholder="Entre com o CPF"
            required
          />
        )}

        <Select
          {...register("cnpjEsocial")}
          id="cnpjEsocial"
          label="CNPJ para e-Social"
          items={[
            { label: "CNPJ raiz/base", value: "base" },
            { label: "CNPJ completo", value: "completo" },
          ]}
          defaultValue="base"
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/2">
        {tipoInscricao === "CNPJ" ? (
          <InputGroup
            {...register("razaoSocial")}
            id="razaoSocial"
            label="Razão Social"
            type="text"
            placeholder="Entre com a razão social"
            required
          />
        ) : (
          <InputGroup
            {...register("nomeCompleto")}
            id="nomeCompleto"
            label="Nome Completo"
            type="text"
            placeholder="Entre com o nome completo"
            required
          />
        )}

        <InputGroup
          {...register("nomeFantasia")}
          id="nomeFantasia"
          label="Nome Fantasia"
          type="text"
          placeholder="Entre com o nome fantasia"
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/2">
        <InputGroup
          {...register("identificacao")}
          id="identificacao"
          label="Identificação"
          type="text"
          placeholder="Entre com a identificação"
          required
        />
        <InputGroup
          {...register("email")}
          id="email"
          label="Email"
          type="email"
          placeholder="Entre com o e-mail"
          required
        />
      </fieldset>

      <fieldset>
        <InputGroup
          {...register("cep")}
          id="cep"
          label="CEP"
          type="text"
          placeholder="Entre com o CEP"
          className="w-full xl:w-1/4"
          required
        />
        <InputGroup
          {...register("endereco")}
          id="endereco"
          label="Endereço"
          type="text"
          placeholder="Entre com o endereço"
          className="w-full xl:w-3/4"
          required
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/3">
        <InputGroup
          {...register("bairro")}
          id="bairro"
          label="Bairro"
          type="text"
          placeholder="Entre com o bairro"
          required
        />

        <InputGroup
          {...register("cidade")}
          id="cidade"
          label="Cidade"
          type="text"
          placeholder="Entre com a cidade"
          required
        />

        <Select
          {...register("estado")}
          id="estado"
          label="Estado"
          items={states}
          defaultValue="SP"
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/3">
        <InputGroup
          {...register("telefone")}
          id="telefone"
          label="Telefone"
          type="tel"
          placeholder="Entre com o telefone"
        />
        <InputGroup
          {...register("whatsapp")}
          id="whatsapp"
          label="Whatsapp"
          type="tel"
          placeholder="Entre com o whatsapp"
        />
        <Select
          {...register("segmento")}
          id="segmento"
          label="Segmento"
          items={[]}
          defaultValue=""
        />
      </fieldset>
    </FormLayout>
  );
}
