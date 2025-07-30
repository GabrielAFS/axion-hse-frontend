const ITEMS_PER_PAGE = 10;

const DUMMY_EMPLOYERS = [
  {
    id: "1",
    identificacao: "Empresa A",
    razaoSocial: "Empresa A LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "2",
    identificacao: "Empresa B",
    razaoSocial: "Empresa B LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
  {
    id: "3",
    identificacao: "Empresa C",
    razaoSocial: "Empresa C LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "4",
    identificacao: "Empresa D",
    razaoSocial: "Empresa D LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
  {
    id: "5",
    identificacao: "Empresa E",
    razaoSocial: "Empresa E LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "6",
    identificacao: "Empresa F",
    razaoSocial: "Empresa F LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
  {
    id: "7",
    identificacao: "Empresa G",
    razaoSocial: "Empresa G LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "8",
    identificacao: "Empresa H",
    razaoSocial: "Empresa H LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
  {
    id: "9",
    identificacao: "Empresa I",
    razaoSocial: "Empresa I LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "10",
    identificacao: "Empresa J",
    razaoSocial: "Empresa J LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
  {
    id: "11",
    identificacao: "Empresa K",
    razaoSocial: "Empresa K LTDA",
    situacao: "Ativo",
    tipo: "CPF",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: "12",
    identificacao: "Empresa L",
    razaoSocial: "Empresa L LTDA",
    situacao: "Inativo",
    tipo: "CNPJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
];

export async function getEmployers(query: string, currentPage: number) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = DUMMY_EMPLOYERS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(DUMMY_EMPLOYERS.length / ITEMS_PER_PAGE);

  return {
    totalPages,
    employers: paginatedData,
  };
}

export function getBrazilianStates() {
  return [
    { label: "Acre", value: "AC" },
    { label: "Alagoas", value: "AL" },
    { label: "Amapá", value: "AP" },
    { label: "Amazonas", value: "AM" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Distrito Federal", value: "DF" },
    { label: "Espírito Santo", value: "ES" },
    { label: "Goiás", value: "GO" },
    { label: "Maranhão", value: "MA" },
    { label: "Mato Grosso", value: "MT" },
    { label: "Mato Grosso do Sul", value: "MS" },
    { label: "Minas Gerais", value: "MG" },
    { label: "Pará", value: "PA" },
    { label: "Paraíba", value: "PB" },
    { label: "Paraná", value: "PR" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Rio Grande do Sul", value: "RS" },
    { label: "Rondônia", value: "RO" },
    { label: "Roraima", value: "RR" },
    { label: "Santa Catarina", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Sergipe", value: "SE" },
    { label: "Tocantins", value: "TO" },
  ];
}
