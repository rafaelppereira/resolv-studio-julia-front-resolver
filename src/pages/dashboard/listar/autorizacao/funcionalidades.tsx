import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import api from '@/libs/axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Table } from '@/components/Table';
import { Filter } from '@/components/Filter';
import { useFeature } from '@/hooks/useFeature';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import { MetaProps } from '@/utils/interfaces/meta.interface';
import { FeatureProps } from '@/utils/interfaces/feature.interface';
import { ActionButtons } from '@/components/ActionButtons';

interface AuthorizationFeatureProps {
  features: FeatureProps[];
  meta: MetaProps;
}

export default function AuthorizationFeatures({
  features,
  meta,
}: AuthorizationFeatureProps) {
  const {
    page,
    totalItems,
    filterCode,
    filterPage,
    featuresData,
    setFilterCode,
    setFilterPage,
    setFeaturesData,
    registersPerPage,
    reloadWhenChangePage,
  } = useFeature();

  useEffect(() => {
    setFeaturesData(features);
  }, [features]);

  return (
    <>
      <Head>
        <title>Listagem de funcionalidades | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-between">
          <Title
            title="Funcionalidades"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas as Funcionalidades cadastradas."
          />

          <div className="flex items-start gap-4">
            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 right-40 -translate-y-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar uma funcionalidade
                <div className="absolute top-1/2 -right-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        <Filter>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Nome do código</label>
              <input
                type="text"
                value={filterCode}
                placeholder="Digite o nome da funcionalidade"
                onChange={(e) => setFilterCode(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">Nome da página</label>
              <input
                type="text"
                value={filterPage}
                placeholder="Digite o nome da página"
                onChange={(e) => setFilterPage(e.target.value)}
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>
        </Filter>

        <Table
          currentPage={page}
          registersPerPage={registersPerPage}
          onPageChange={reloadWhenChangePage}
          tHeadOptions={['Código', 'Página']}
          totalCountOnRegisters={totalItems}
        >
          {featuresData.map((option, index) => {
            return (
              <tr key={index} className="hover:brightness-90 transition-all">
                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.code}
                </td>

                <td className="bg-zinc-700 px-4 py-3 text-zinc-300 text-md">
                  {option.page.name}
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

          {featuresData.length <= 0 && (
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

  const { data } = await api.get('/feature', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      features: data.items,
      meta: data.meta,
    },
  };
};
