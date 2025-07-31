import ContabilidadesForm from "./contabilidades";
import ContatosForm from "./contatos";
import DadosCadastraisForm from "./dados-cadastrais";
import FinanceiroForm from "./financeiro";
import ObservacoesForm from "./observacoes";
import UnidadeAtendimentoForm from "./unidades-atendimento";

export default function EditEmployerForm({
  employer,
  searchParams,
}: {
  employer: any;
  searchParams?: any;
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <DadosCadastraisForm />

      <FinanceiroForm employer={employer} />

      <ObservacoesForm employer={employer} />

      <ContatosForm page={currentPage} query={query} />

      <UnidadeAtendimentoForm page={currentPage} query={query} />

      <ContabilidadesForm page={currentPage} query={query} />
    </>
  );
  1;
}
