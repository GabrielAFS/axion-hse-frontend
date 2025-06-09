import { ReactElement } from "react";

import * as Icons from "../icons";

interface SidebarSectionItem {
  title: string;
  icon?: (props: Icons.PropsType) => ReactElement;
  url?: string;
  items?: SidebarSectionItem[];
}

interface SidebarSection {
  label: string;
  items: SidebarSectionItem[];
}

export const NAV_DATA: SidebarSection[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Início",
        url: "/",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Cadastros",
        url: "/calendar",
        icon: Icons.Forms,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
        ],
      },
      {
        title: "Vínculos",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Gestão",
        icon: Icons.Management,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "CAT",
        url: "/tables",
        icon: Icons.Fire,
        items: [],
      },
      {
        title: "eSocial",
        icon: Icons.ESocial,
        items: [],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: Icons.PieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
