"use client";

import FormLayout from "./form-layout";
import { updateEmployer } from "../../lib/actions";
import { ObservacoesData, ObservacoesSchema } from "../../lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";

interface Props {
  employer: any; // TODO: Replace with actual employer type
}

export default function ObservacoesForm({ employer }: Props) {
  const [isSaving, startIsSaving] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ObservacoesData>({
    resolver: zodResolver(ObservacoesSchema),
  });

  const onSubmit = (data: ObservacoesData) => {
    startIsSaving(async () => {
      try {
        await updateEmployer(employer?.id, data);

        toast("Observações do empregador atualizadas com sucesso!", {
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
      title="Observações"
      isSaving={isSaving}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="*:w-full">
        <TextAreaGroup
          {...register("obsPrincipais")}
          label="Principais"
          placeholder="Algumas observações..."
        />
      </fieldset>

      <fieldset className="*:w-full">
        <TextAreaGroup
          {...register("obsParaAtendimento")}
          label="Para o Atendimento"
          placeholder="Algumas observações para o atendimento..."
        />
      </fieldset>
    </FormLayout>
  );
}
