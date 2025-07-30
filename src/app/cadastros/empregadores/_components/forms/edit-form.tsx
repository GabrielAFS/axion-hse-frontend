import DadosCadastraisForm from "./dados-cadastrais";
import FinanceiroForm from "./financeiro";
import ObservacoesForm from "./observacoes";

export default function EditEmployerForm({ employer }: { employer: any }) {
  return (
    <>
      <DadosCadastraisForm />

      <FinanceiroForm employer={employer} />

      <ObservacoesForm employer={employer} />
    </>
  );
  1;
}
