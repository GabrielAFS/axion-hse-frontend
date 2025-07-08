export async function getEmployers() {
  return [
    {
      id: "Empresa A",
      razaoSocial: "Empresa A LTDA",
      situacao: "Ativo",
      tipo: "CPF",
      cidade: "São Paulo",
      uf: "SP",
    },
    {
      id: "Empresa B",
      razaoSocial: "Empresa B LTDA",
      situacao: "Inativo",
      tipo: "CNPJ",
      cidade: "Rio de Janeiro",
      uf: "RJ",
    },
  ];
}
