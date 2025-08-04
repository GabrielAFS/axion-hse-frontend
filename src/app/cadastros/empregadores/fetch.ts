import {
  DUMMY_EMPLOYERS,
  DUMMY_EMPLOYER_CONTACTS,
  DUMMY_EMPLOYER_ACCOUNTING,
  DUMMY_EMPLOYER_SERVICE_UNIT,
  ITEMS_PER_PAGE,
  DUMMY_DOCTORS,
} from "./lib/data";

export async function getEmployers(query: string, currentPage: number) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = DUMMY_EMPLOYERS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(DUMMY_EMPLOYER_CONTACTS.length / ITEMS_PER_PAGE);

  return {
    totalPages,
    employers: paginatedData,
  };
}

export async function getEmployerContacts(query: string, currentPage: number) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = DUMMY_EMPLOYER_CONTACTS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(DUMMY_EMPLOYER_CONTACTS.length / ITEMS_PER_PAGE);

  return {
    totalPages,
    contacts: paginatedData,
  };
}

export async function getEmployerServiceUnits(
  query: string,
  currentPage: number,
) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = DUMMY_EMPLOYER_SERVICE_UNIT.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    DUMMY_EMPLOYER_SERVICE_UNIT.length / ITEMS_PER_PAGE,
  );

  return {
    totalPages,
    service_units: paginatedData,
  };
}

export async function getEmployerAccounting(
  query: string,
  currentPage: number,
) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = DUMMY_EMPLOYER_ACCOUNTING.slice(startIndex, endIndex);
  const totalPages = Math.ceil(
    DUMMY_EMPLOYER_ACCOUNTING.length / ITEMS_PER_PAGE,
  );

  return {
    totalPages,
    accounting: paginatedData,
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

export async function getDoctors() {
  return DUMMY_DOCTORS;
}

export async function getEmployerById(id: string) {
  // Simulate fetching employer data by ID
  return DUMMY_EMPLOYERS.find((employer) => employer.id === id);
}
