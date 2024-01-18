import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import api from '@/libs/axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Table } from '@/components/Table';
import { useUser } from '@/hooks/useUser';
import { Filter } from '@/components/Filter';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import { MetaProps } from '@/utils/interfaces/meta.interface';
import { UserAuthorizationProps } from '@/utils/interfaces/user.interface';
import { ActionButtons } from '@/components/ActionButtons';

interface AuthorizationRoleProps {
  users: UserAuthorizationProps[];
  meta: MetaProps;
}

export default function AuthorizationUsers({
  users,
  meta,
}: AuthorizationRoleProps) {
  const {
    page,
    usersData,
    totalItems,
    filterName,
    filterRole,
    filterEmail,
    setUsersData,
    setFilterRole,
    setFilterName,
    setFilterEmail,
    registersPerPage,
    reloadWhenChangePage,
  } = useUser();

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return (
    <>
      <Head>
        <title>Listagem de usuários | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-between">
          <Title
            title="Usuários"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas os Usuários cadastradas."
          />

          <div className="flex items-start gap-4">
            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar um usuário
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        <Filter>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Nome do usuário</label>
              <input
                type="text"
                value={filterName}
                placeholder="Digite o nome do usuário"
                onChange={(e) => setFilterName(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">E-mail do usuário</label>
              <input
                type="text"
                value={filterEmail}
                placeholder="Digite o e-mail do usuário"
                onChange={(e) => setFilterEmail(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">Perfil do usuário</label>
              <input
                type="text"
                value={filterRole}
                placeholder="Digite o perfil do usuário"
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>
        </Filter>

        <Table
          currentPage={page}
          registersPerPage={registersPerPage}
          onPageChange={reloadWhenChangePage}
          tHeadOptions={['Nome', 'E-mail', 'Perfil']}
          totalCountOnRegisters={totalItems}
        >
          {usersData.map((option, index) => {
            return (
              <tr key={index} className="hover:brightness-90 transition-all">
                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.name}
                </td>

                <td className="bg-zinc-700 truncate px-4 py-3 text-zinc-300 text-md">
                  {option.email}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.role}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  <ActionButtons
                    onEdit={() => console.log}
                    onDelete={() => console.log}
                  />
                </td>
              </tr>
            );
          })}

          {usersData.length <= 0 && (
            <tr>
              <td className="bg-zinc-700 px-4 py-3 w-full text-zinc-400">
                Sem dados encontrados...
              </td>

              <td className="bg-zinc-700 px-4 py-3 w-full" />
              <td className="bg-zinc-700 px-4 py-3 w-full" />
              <td className="bg-zinc-700 px-4 py-3 w-full" />
            </tr>
          )}
        </Table>
      </LayoutDefault>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  const { data } = await api.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      users: data.items,
      meta: data.meta,
    },
  };
};
