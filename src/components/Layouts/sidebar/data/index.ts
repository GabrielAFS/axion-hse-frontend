import { ReactElement } from "react";

import * as Icons from "../icons";

export interface SidebarItem {
  title: string;
  icon?: (props: Icons.PropsType) => ReactElement;
  url?: string;
  items?: SidebarItem[];
}

export const NAV_DATA: SidebarItem[] = [
  {
    title: "Início",
    url: "/",
    icon: Icons.HomeIcon,
    items: [],
  },
  {
    title: "Cadastros",
    icon: Icons.Forms,
    items: [
      {
        title: "Empregadores",
        url: "/cadastros/empregadores",
      },
      {
        title: "Unidades",
        url: "/cadastros/unidades",
      },
      {
        title: "Terceirização",
        url: "/cadastros/terceiros",
      },
      {
        title: "Setores",
        url: "/cadastros/setores",
      },
      {
        title: "Funções",
        url: "/cadastros/funcoes",
      },
      {
        title: "Trabalhadores",
        url: "/cadastros/trabalhadores",
      },
      {
        title: "Profissionais",
        url: "/cadastros/profissionais",
      },
      {
        title: "Riscos Ocupacionais",
        url: "/cadastros/riscos-ocupacionais",
      },

      {
        title: "Equipamentos",
        url: "/cadastros/equipamentos",
      },
      {
        title: "Customização",
        items: [
          {
            title: "Anexos Padrão",
            url: "/cadastros/customizar/anexos",
          },
          {
            title: "Textos Padrão",
            url: "/cadastros/customizar/txt-padrao",
          },
          {
            title: "Textos Rápidos",
            url: "/cadastros/customizar/txt-rapidos",
          },
          {
            title: "Ordem de Serviço",
            url: "/cadastros/customizar/ordem-servico",
          },
        ],
      },
      {
        title: "Segurança do Trabalho",
        items: [
          {
            title: "Medidas de Proteção",
            url: "/cadastros/seguranca-trabalho/medidas",
          },
          {
            title: "Ambientes de Trabalho",
            url: "/cadastros/seguranca-trabalho/ambientes",
          },
          {
            title: "Análise Ergonômica",
            url: "/cadastros/seguranca-trabalho/analise",
          },
          {
            title: "Avaliações Quantitativas",
            url: "/cadastros/seguranca-trabalho/avaliacoes",
          },
          {
            title: "Treinamentos",
            url: "/cadastros/seguranca-trabalho/treinamentos",
          },
          {
            title: "Documentos",
            url: "/cadastros/seguranca-trabalho/documentos",
          },
          {
            title: "GHE Riscos",
            url: "/cadastros/seguranca-trabalho/ghe",
          },
          {
            title: "APR/APP",
            items: [
              {
                title: "APR/APP",
                url: "/cadastros/seguranca-trabalho/apr-app/",
              },
              {
                title: "Etapas",
                url: "/cadastros/seguranca-trabalho/apr-app/etapas",
              },
              {
                title: "Riscos x Atividades",
                url: "/cadastros/seguranca-trabalho/apr-app/riscos",
              },
            ],
          },
        ],
      },
      {
        title: "Medicina do Trabalho",
        items: [
          {
            title: "Exames",
            url: "/cadastros/med-trabalho/exames",
          },
          {
            title: "GHE Exames",
            url: "/cadastros/med-trabalho/ghe-exames",
          },
        ],
      },

      {
        title: "Clínica",
        items: [
          {
            title: "Aptidões",
            url: "/cadastros/clinica/aptidoes",
          },
          {
            title: "Prontuário Clínico",
            items: [
              {
                title: "Categorias",
                url: "/cadastros/clinica/prontuario/categorias",
              },
              {
                title: "Modelos",
                url: "/cadastros/clinica/prontuario/modelos",
              },
            ],
          },
          {
            title: "Convênios",
            url: "/cadastros/clinica/convenios",
          },
          {
            title: "Famílias de Exames",
            url: "/cadastros/clinica/exames",
          },
          {
            title: "Jornadas",
            url: "/cadastros/clinica/jornadas",
          },
          {
            title: "Salas",
            url: "/cadastros/clinica/salas",
          },
          {
            title: "Guichês",
            url: "/cadastros/clinica/guiches",
          },
        ],
      },
      {
        title: "Comercial",
        items: [
          {
            title: "Segmentos",
            url: "/cadastros/comercial/segmentos",
          },
          {
            title: "Contabilidades",
            url: "/cadastros/comercial/contabilidades",
          },
        ],
      },
      {
        title: "Financeiro",
        items: [
          {
            title: "Categorias",
            url: "/cadastros/financeiro/categorias",
          },
          {
            title: "Serviços",
            url: "/cadastros/financeiro/servicos",
          },
          {
            title: "Condições de Pagamentos",
            url: "/cadastros/financeiro/pagamentos",
          },
          {
            title: "Fornecedores",
            url: "/cadastros/financeiro/fornecedores",
          },
          {
            title: "Tabela de Preços",
            url: "/cadastros/financeiro/tabela-precos",
          },
          {
            title: "Tabela de Custos",
            url: "/cadastros/financeiro/tabela-custos",
          },
          {
            title: "Caixa / Bancos",
            url: "/cadastros/financeiro/caixa",
          },
          {
            title: "Centro de Custos",
            url: "/cadastros/financeiro/centro",
          },
        ],
      },
      {
        title: "Estoque",
        items: [
          {
            title: "Estoques",
            url: "/cadastros/estoque",
          },
          {
            title: "Grupo de Materiais",
            url: "/cadastros/estoque/grupo",
          },
          {
            title: "Materiais",
            url: "/cadastros/estoque/materiais",
          },
        ],
      },
    ],
  },
  {
    title: "Vínculos",
    url: "/vinculos",
    icon: Icons.User,
    items: [],
  },
  {
    title: "Gestão",
    icon: Icons.Management,
    items: [
      {
        title: "Segurança do Trabalho",
        items: [
          {
            title: "PPPs",
            url: "/gestao/seguranca/ppps",
          },
          {
            title: "EPIs",
            url: "/gestao/seguranca/epis",
          },
          {
            title: "Treinamentos",
            url: "/gestao/seguranca/treinamentos",
          },
          {
            title: "Documentos",
            url: "/gestao/seguranca/documentos",
          },
          {
            title: "Ordens de Serviço",
            url: "/gestao/seguranca/ordens",
          },
          {
            title: "CIPA",
            items: [
              {
                title: "Gestões",
                url: "/gestao/seguranca/cipa/gestoes",
              },
              {
                title: "Reuniões",
                url: "/gestao/seguranca/cipa/reunioes",
              },
            ],
          },
          {
            title: "FDS",
            url: "/gestao/seguranca/fds",
          },
        ],
      },
      {
        title: "Medicina do Trabalho",
        items: [
          {
            title: "Afastamentos",
            url: "/gestao/medicina/afastamentos",
          },
          {
            title: "Atestados",
            url: "/gestao/medicina/atestados",
          },
          {
            title: "Resultados de Exames",
            url: "/gestao/medicina/resultados-exames",
          },
          {
            title: "Resultados Exames Retroativos",
            url: "/gestao/medicina/resultados-retroativos",
          },
        ],
      },

      {
        title: "Clínica",
        items: [
          {
            title: "ASO Avulso",
            url: "/gestao/clinica/aso-avulso",
          },
          {
            title: "ASO",
            url: "/gestao/clinica/aso",
          },
        ],
      },
    ],
  },
  {
    title: "CAT",
    url: "/cat",
    icon: Icons.Fire,
    items: [],
  },
  {
    title: "eSocial",
    icon: Icons.ESocial,
    items: [
      {
        title: "Certificados",
        url: "/eSocial/certificados",
      },
      {
        title: "Painel",
        url: "/eSocial/painel",
      },
      {
        title: "Eventos",
        url: "/eSocial/eventos",
      },
      {
        title: "Envios",
        url: "/eSocial/envios",
      },
    ],
  },
];
