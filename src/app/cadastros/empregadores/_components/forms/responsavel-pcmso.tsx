"use client";

import FormLayout from "./form-layout";
import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";
import { getBrazilianStates, getDoctors } from "../../fetch";
import { updateEmployer } from "../../lib/actions";
import {
  ResponsavelPcmsoData,
  ResponsavelPcmsoSchema,
} from "../../lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useTransition } from "react";
import { Doctor } from "@/types/empregadores";

interface Props {
  employer: any; // TODO: Replace with actual employer type
}

export default function ResponsavelPCMSOForm({ employer }: Props) {
  const navigate = useRouter();
  const [isSaving, startIsSaving] = useTransition();
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const states = getBrazilianStates();
  const doctorOptions = [
    {
      label: "N/A",
      value: "",
    },
  ].concat(
    doctors.map((doctor) => ({
      label: doctor.nome,
      value: doctor.id,
    })),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ResponsavelPcmsoData>({
    resolver: zodResolver(ResponsavelPcmsoSchema),
  });

  const selectedDoctorId = watch("nomeResponsavelPcmso");
  const selectedDoctor = doctors.find(
    (doctor) => doctor.id === selectedDoctorId,
  );

  const onChangeDoctor = () => {
    if (selectedDoctor) {
      setValue("cpfResponsavelPcmso", selectedDoctor.cpf);
      setValue("crmResponsavelPcmso", selectedDoctor.crm);
      setValue("estadoResponsavelPcmso", selectedDoctor.uf);
    }
  };

  const onSubmit = (data: ResponsavelPcmsoData) => {
    startIsSaving(async () => {
      try {
        await updateEmployer(employer?.id, data);

        toast("Responsável pelo PCMSO do empregador atualizado com sucesso!", {
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

  useEffect(() => {
    getDoctors().then((doctors) => setDoctors(doctors));
  }, []);

  useEffect(() => {
    onChangeDoctor();
  }, [selectedDoctorId]);

  return (
    <FormLayout
      title="Responsável pelo PCMSO"
      isSaving={isSaving}
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset>
        <InputGroup
          {...register("tituloResponsavelPcmso")}
          label="Título"
          type="text"
          placeholder="Entre com o titulo"
          className="w-full xl:w-1/4"
        />
        <Select
          {...register("nomeResponsavelPcmso")}
          label="Nome"
          items={doctorOptions}
        />
      </fieldset>

      <fieldset className="*:w-full *:xl:w-1/3">
        <InputGroup
          {...register("cpfResponsavelPcmso")}
          label="CPF"
          type="text"
          placeholder="Entre com o cpf"
        />

        <InputGroup
          {...register("crmResponsavelPcmso")}
          label="CRM"
          type="text"
          placeholder="Entre com a CRM"
        />

        <Select
          {...register("estadoResponsavelPcmso")}
          id="estado"
          label="Estado"
          items={states}
          defaultValue="SP"
        />
      </fieldset>
    </FormLayout>
  );
}
