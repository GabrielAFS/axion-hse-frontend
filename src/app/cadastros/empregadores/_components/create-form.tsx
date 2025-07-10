"use client";

import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { useSearchParams } from "next/navigation";

export default function NewEmployerForm() {
  const searchParams = useSearchParams();

  const subscriptionType = searchParams.get("tipoInscricao") || "CNPJ";

  return (
    <ShowcaseSection title="Formulário de Cadastro" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <Select
            label="Tipo Inscrição"
            items={[
              { label: "CNPJ", value: "CNPJ" },
              { label: "CPF", value: "CPF" },
            ]}
            defaultValue="CNPJ"
            queryKey="tipoInscricao"
            className="w-full xl:w-1/3"
          />

          {subscriptionType === "CNPJ" ? (
            <InputGroup
              label="CNPJ"
              type="text"
              placeholder="Entre com o CNPJ"
              className="w-full xl:w-1/3"
              required
            />
          ) : (
            <InputGroup
              label="CPF"
              type="text"
              placeholder="Entre com o CPF"
              className="w-full xl:w-1/3"
              required
            />
          )}

          <Select
            label="CNPJ para e-Social"
            items={[
              { label: "CNPJ raiz/base", value: "base" },
              { label: "CNPJ completo", value: "completo" },
            ]}
            defaultValue="base"
            className="w-full xl:w-1/3"
          />
        </div>

        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          {subscriptionType === "CNPJ" ? (
            <InputGroup
              label="Razão Social"
              type="text"
              placeholder="Entre com a razão social"
              className="w-full xl:w-1/2"
              required
            />
          ) : (
            <InputGroup
              label="Nome Completo"
              type="text"
              placeholder="Entre com o nome completo"
              className="w-full xl:w-1/2"
              required
            />
          )}

          <InputGroup
            label="Nome Fantasia"
            type="text"
            placeholder="Entre com o nome fantasia"
            className="w-full xl:w-1/2"
          />
        </div>

        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="Identificação"
            type="text"
            placeholder="Entre com a identificação"
            className="w-full xl:w-1/2"
            required
          />
          <InputGroup
            label="Email"
            type="email"
            placeholder="Entre com o e-mail"
            className="w-full xl:w-1/2"
            required
          />
        </div>

        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="CEP"
            type="text"
            placeholder="Entre com o CEP"
            className="w-full xl:w-1/4"
            required
          />
          <InputGroup
            label="Endereço"
            type="text"
            placeholder="Entre com o endereço"
            className="w-full xl:w-3/4"
            required
          />
        </div>

        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="Bairro"
            type="text"
            placeholder="Entre com o CPF"
            className="w-full xl:w-1/3"
            required
          />

          <InputGroup
            label="Cidade"
            type="text"
            placeholder="Entre com o CPF"
            className="w-full xl:w-1/3"
            required
          />

          <Select
            label="Estado"
            items={[]}
            defaultValue="base"
            className="w-full xl:w-1/3"
          />
        </div>

        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="Telefone"
            type="tel"
            placeholder="Entre com o telefone"
            className="w-full xl:w-1/2"
          />
          <Select
            label="Segmento"
            items={[]}
            defaultValue=""
            className="w-full xl:w-1/2"
          />
        </div>

        <button className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Salvar
        </button>
      </form>
    </ShowcaseSection>
  );
}
