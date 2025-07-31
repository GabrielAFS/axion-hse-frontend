import ContatosForm from "./contatos";
import DadosCadastraisForm from "./dados-cadastrais";
import FinanceiroForm from "./financeiro";
import ObservacoesForm from "./observacoes";

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
    </>
  );
  1;
}
