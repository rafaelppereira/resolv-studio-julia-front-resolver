import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import api from '@/libs/axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { Table } from '@/components/Table';
import { Filter } from '@/components/Filter';
import { useCompany } from '@/hooks/useCompany';
import { ProgressBar } from '@/components/ProgressBar';
import { ActionButtons } from '@/components/ActionButtons';
import { CompanyProps } from '@/utils/interfaces/company.interface';
import { useAuth } from '@/hooks/useAuth';

interface CompaniesProps {
  companies: CompanyProps[];
}

export default function Companies({ companies }: CompaniesProps) {
  const {
    page,
    filterName,
    totalItems,
    setFilterName,
    companiesData,
    registersPerPage,
    setCompaniesData,
    reloadWhenChangePage,
  } = useCompany();

  const { organization } = useAuth();

  useEffect(() => {
    setCompaniesData(companies);
  }, [companies]);

  return (
    <>
      <Head>
        <title>Listagem de empresas | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-end justify-between">
          <Title
            title="Empresas"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas as Empresas cadastradas."
          />

          <div className="flex items-start gap-4">
            {organization && (
              <ProgressBar
                current={totalItems}
                max={organization.limits.companies}
                title="Limite de empresas criadas"
              />
            )}

            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar uma empresa
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        <Filter>
          <div className="mt-3 grid grid-cols-1 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Nome da empresa</label>
              <input
                type="text"
                value={filterName}
                placeholder="Digite o nome da empresa"
                onChange={(e) => setFilterName(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>
        </Filter>

        <Table
          currentPage={page}
          registersPerPage={registersPerPage}
          onPageChange={reloadWhenChangePage}
          totalCountOnRegisters={totalItems}
          tHeadOptions={['Nome da empresa', 'Tipo']}
        >
          {companiesData.map((option, index) => {
            return (
              <tr key={index} className="hover:brightness-90 transition-all">
                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.name}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.type}
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

          {companiesData.length <= 0 && (
            <tr>
              <td className="bg-zinc-700 px-4 py-3 w-full text-zinc-400">
                Sem dados encontrados...
              </td>

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

  const { data } = await api.get('/company', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      companies: data.items,
    },
  };
};
