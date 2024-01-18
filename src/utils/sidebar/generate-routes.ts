import {
  Icon,
  House,
  Kanban,
  Buildings,
  ListDashes,
  CurrencyCircleDollar,
} from 'phosphor-react';

export interface SubRoutes {
  title: string;
  url: string;
}

interface RoutesProps {
  icon: Icon;
  title: string;
  url?: string;
  items?: SubRoutes[];
}

const prefix: string = '/dashboard';

export const routes: RoutesProps[] = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: House,
  },
  {
    title: 'Listagens',
    icon: ListDashes,
    items: [
      {
        title: 'Personas',
        url: `${prefix}/listar/personas`,
      },
    ],
  },
  {
    title: 'Autorização',
    items: [
      {
        title: 'APIS',
        url: `${prefix}/listar/autorizacao/apis`,
      },
      {
        title: 'Perfis',
        url: `${prefix}/listar/autorizacao/perfis`,
      },
      {
        title: 'Usuários',
        url: `${prefix}/listar/autorizacao/usuarios`,
      },
      {
        title: 'Páginas',
        url: `${prefix}/listar/autorizacao/paginas`,
      },
      {
        title: 'Funcionalidades',
        url: `${prefix}/listar/autorizacao/funcionalidades`,
      },
    ],
    icon: Buildings,
  },
  {
    title: 'Administrativo',
    items: [
      {
        title: 'Organizações',
        url: `${prefix}/listar/organizacoes`,
      },
      {
        title: 'Empresas',
        url: `${prefix}/listar/empresas`,
      },
    ],
    icon: Kanban,
  },
  {
    title: 'Precificação',
    url: `${prefix}/precificação/simular`,
    icon: CurrencyCircleDollar,
  },
];
