import DadosCadastraisForm from "./dados-cadastrais";
import FinanceiroForm from "./financeiro";

export default function EditEmployerForm({ employer }: { employer: any }) {
  return (
    <>
      <DadosCadastraisForm />

      <FinanceiroForm employer={employer} />
    </>
  );
  1;
}
