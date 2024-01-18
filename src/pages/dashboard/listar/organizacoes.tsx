import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import api from '@/libs/axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Table } from '@/components/Table';
import { Filter } from '@/components/Filter';
import { ShareNetwork } from 'phosphor-react';
import { useOrganization } from '@/hooks/useOrganization';
import { ActionButtons } from '@/components/ActionButtons';
import { OrganizationProps } from '@/utils/interfaces/organization.interface';

interface OrganizationsProps {
  organizations: OrganizationProps[];
}

export default function Organizations({ organizations }: OrganizationsProps) {
  const {
    page,
    totalItems,
    filterName,
    setFilterName,
    registersPerPage,
    organizationsData,
    reloadWhenChangePage,
    setOrganizationsData,
  } = useOrganization();

  useEffect(() => {
    setOrganizationsData(organizations);
  }, [organizations]);

  return (
    <>
      <Head>
        <title>Listagem de organizações | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-between">
          <Title
            title="Organizações"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas as Organizações cadastradas."
          />

          <div className="flex items-start gap-4">
            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar uma organização
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        <Filter>
          <div className="mt-3 grid grid-cols-1 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">
                Nome da organização
              </label>
              <input
                type="text"
                value={filterName}
                placeholder="Digite o nome da organização"
                onChange={(e) => setFilterName(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>
        </Filter>

        <Table
          currentPage={page}
          totalCountOnRegisters={totalItems}
          registersPerPage={registersPerPage}
          onPageChange={reloadWhenChangePage}
          tHeadOptions={['Nome da organização', 'Segmento', 'Membros']}
        >
          {organizationsData.map((option, index) => {
            return (
              <tr key={index} className="hover:brightness-90 transition-all">
                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.profile.name}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.segment}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.members.length} membros
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="group relative w-9 h-9 bg-zinc-500 flex items-center justify-center rounded-full"
                    >
                      <ShareNetwork weight="fill" size={20} />

                      <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 -translate-y-1/2 right-11 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                        Integrações padrão
                        <div className="absolute top-1/2 -right-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
                      </div>
                    </button>

                    <ActionButtons
                      onEdit={() => console.log}
                      onDelete={() => console.log}
                    />
                  </div>
                </td>
              </tr>
            );
          })}

          {organizationsData.length <= 0 && (
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

  const { data } = await api.get('/organization', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      organizations: data.items,
    },
  };
};
