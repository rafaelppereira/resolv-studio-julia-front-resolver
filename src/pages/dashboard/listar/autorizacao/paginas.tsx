import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import api from '@/libs/axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Table } from '@/components/Table';
import { Filter } from '@/components/Filter';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import { MetaProps } from '@/utils/interfaces/meta.interface';
import { usePage } from '@/hooks/usePage';
import { PageProps } from '@/utils/interfaces/page.interface';
import { ActionButtons } from '@/components/ActionButtons';

interface AuthorizationFeatureProps {
  pages: PageProps[];
  meta: MetaProps;
}

export default function AuthorizationPages({
  pages,
  meta,
}: AuthorizationFeatureProps) {
  const {
    page,
    pagesData,
    totalItems,
    filterName,
    setPagesData,
    setFilterName,
    registersPerPage,
    filterDescription,
    setFilterDescription,
    reloadWhenChangePage,
  } = usePage();

  useEffect(() => {
    setPagesData(pages);
  }, [pages]);

  return (
    <>
      <Head>
        <title>Listagem de páginas | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-between">
          <Title
            title="Páginas"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas as Páginas cadastradas."
          />

          <div className="flex items-start gap-4">
            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar uma página
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        <Filter>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Nome da página</label>
              <input
                type="text"
                value={filterName}
                placeholder="Digite o nome da página"
                onChange={(e) => setFilterName(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">
                Descrição da página
              </label>
              <input
                type="text"
                value={filterDescription}
                placeholder="Digite a descrição da página"
                onChange={(e) => setFilterDescription(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>
        </Filter>

        <Table
          currentPage={page}
          registersPerPage={registersPerPage}
          onPageChange={reloadWhenChangePage}
          tHeadOptions={['Nome', 'Descrição']}
          totalCountOnRegisters={totalItems}
        >
          {pagesData.map((option, index) => {
            return (
              <tr key={index} className="hover:brightness-90 transition-all">
                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.name}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.description}
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

          {pagesData.length <= 0 && (
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

  const { data } = await api.get('/page', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      pages: data.items,
      meta: data.meta,
    },
  };
};
