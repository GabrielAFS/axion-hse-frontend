"use client";

import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { useSearchParams } from "next/navigation";
import { getBrazilianStates } from "../fetch";

export default function NewEmployerForm() {
  const searchParams = useSearchParams();
  const states = getBrazilianStates();

  const subscriptionType = searchParams.get("tipoInscricao") || "CNPJ";

  return (
    <ShowcaseSection title="Formulário de Cadastro" className="!p-6.5">
      <form
        action="#"
        className="*:mb-4.5 *:flex *:flex-col *:gap-4.5 *:xl:flex-row *:xl:items-end"
      >
        <fieldset className="*:w-full *:xl:w-1/3">
          <Select
            id="tipoInscricao"
            label="Tipo Inscrição"
            items={[
              { label: "CNPJ", value: "CNPJ" },
              { label: "CPF", value: "CPF" },
            ]}
            defaultValue="CNPJ"
            queryKey="tipoInscricao"
          />

          {subscriptionType === "CNPJ" ? (
            <InputGroup
              id="cnpj"
              label="CNPJ"
              type="text"
              placeholder="Entre com o CNPJ"
              required
            />
          ) : (
            <InputGroup
              id="cpf"
              label="CPF"
              type="text"
              placeholder="Entre com o CPF"
              required
            />
          )}

          <Select
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
          {subscriptionType === "CNPJ" ? (
            <InputGroup
              id="razaoSocial"
              label="Razão Social"
              type="text"
              placeholder="Entre com a razão social"
              required
            />
          ) : (
            <InputGroup
              id="nomeCompleto"
              label="Nome Completo"
              type="text"
              placeholder="Entre com o nome completo"
              required
            />
          )}

          <InputGroup
            id="nomeFantasia"
            label="Nome Fantasia"
            type="text"
            placeholder="Entre com o nome fantasia"
          />
        </fieldset>

        <fieldset className="*:w-full *:xl:w-1/2">
          <InputGroup
            id="identificacao"
            label="Identificação"
            type="text"
            placeholder="Entre com a identificação"
            required
          />
          <InputGroup
            id="email"
            label="Email"
            type="email"
            placeholder="Entre com o e-mail"
            required
          />
        </fieldset>

        <fieldset>
          <InputGroup
            id="cep"
            label="CEP"
            type="text"
            placeholder="Entre com o CEP"
            className="w-full xl:w-1/4"
            required
          />
          <InputGroup
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
            id="bairro"
            label="Bairro"
            type="text"
            placeholder="Entre com o bairro"
            required
          />

          <InputGroup
            id="cidade"
            label="Cidade"
            type="text"
            placeholder="Entre com a cidade"
            required
          />

          <Select id="estado" label="Estado" items={states} defaultValue="SP" />
        </fieldset>

        <fieldset className="*:w-full *:xl:w-1/2">
          <InputGroup
            id="telefone"
            label="Telefone"
            type="tel"
            placeholder="Entre com o telefone"
          />
          <Select id="segmento" label="Segmento" items={[]} defaultValue="" />
        </fieldset>

        <button className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Salvar
        </button>
      </form>
    </ShowcaseSection>
  );
}
