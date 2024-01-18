import Head from 'next/head';
import Link from 'next/link';
import { Title } from '@/components/Title';
import { LayoutDefault } from '@/layouts/Default';

import { X } from 'phosphor-react';
import { ProgressBar } from '@/components/ProgressBar';

export default function Journeys() {
  return (
    <>
      <Head>
        <title>Listagem de jornadas | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex items-center justify-between">
          <Title
            title="Jornadas"
            previousRoute="/dashboard"
            description="Aqui é possível visualizar a listagem de todas as Jornadas cadastradas para a organização."
          />

          <div className="flex items-start gap-4">
            <ProgressBar
              max={10}
              current={4}
              title="Limite de jornadas criadas"
            />
            <Link
              href="/cadastrar/jornada"
              className="relative group bg-zinc-700 px-10 py-3 font-semibold text-sm block border-b-4 border-b-brand-500 rounded-md text-zinc-300"
            >
              Adicionar
              <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                Adicionar uma jornada
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-7 bg-zinc-700 p-3 border-2 border-zinc-600 rounded-md ">
          <div className="flex items-center justify-between border-b border-b-zinc-600 pb-3">
            <h1 className="text-zinc-400 ">Filtrar listagem</h1>

            <button
              type="button"
              className="text-zinc-400 bg-zinc-800 p-1 rounded-md"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Nome da jornada</label>
              <input
                type="text"
                placeholder="Digite o nome da jornada"
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm">Persona</label>
              <input
                type="text"
                placeholder="Digite o nome da persona"
                className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <label className="text-zinc-400 text-sm">Organização</label>

              <select className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300">
                <option value="">Selecione uma organização</option>
              </select>
            </div>

            <div>
              <label className="text-zinc-400 text-sm">Empresa</label>

              <select className="w-full h-11 mt-2 rounded-md px-3 bg-zinc-600 text-sm text-zinc-300">
                <option value="">Selecione uma empresa</option>
              </select>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
}
