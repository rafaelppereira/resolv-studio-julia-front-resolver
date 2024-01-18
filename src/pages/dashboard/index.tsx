import Head from 'next/head';
import Image from 'next/image';

import { LayoutDefault } from '@/layouts/Default';
import { Chart } from '@/components/librarys/Chart';
import { useAuth } from '@/hooks/useAuth';
import { formatToDate } from '@/utils/librarys/format-to-date';

export default function Dashboard() {
  const { user, hasLoadingUser } = useAuth();

  return (
    <>
      <Head>
        <title>Bem-vindo(a) {user.name} | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <LayoutDefault>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="border-zinc-700 border-4 rounded-full overflow-hidden">
              <Image
                src="/julia-images/julia-home.png"
                alt="Jul.IA dando um seja bem-vindo(a)"
                width={120}
                height={120}
              />
            </div>
            <h1 className="mt-4 text-zinc-300 font-semibold text-xl">
              Bem-vindo(a), {user.name}
            </h1>
            <p className="max-w-md text-center text-zinc-400">
              Essa é a nossa plataforma de gestão e criação de jornadas e
              personas incríveis!
            </p>
          </div>
        </div>

        {!hasLoadingUser && (
          <div className="grid grid-cols-3 gap-5 mt-6">
            <div className="bg-zinc-700 w-full p-4 rounded-md flex flex-col gap-6">
              <div>
                <label className="text-zinc-400 text-sm">Nome</label>
                <h1 className="text-zinc-300 font-semibold">
                  {user.organizationName}
                </h1>
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Tipo</label>
                <h1 className="text-zinc-300 font-semibold">
                  {user.organizationType}
                </h1>
              </div>
            </div>

            <div className="bg-zinc-700 w-full p-4 rounded-md flex flex-col gap-6">
              <div>
                <label className="text-zinc-400 text-sm">
                  Endereço de e-mail
                </label>
                <h1 className="text-zinc-300 font-semibold">{user.email}</h1>
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Telefone</label>
                <h1 className="text-zinc-300 font-semibold">{user.phone}</h1>
              </div>
            </div>

            <div className="bg-zinc-700 w-full p-4 rounded-md flex flex-col gap-6">
              <div>
                <label className="text-zinc-400 text-sm">Último acesso</label>
                <h1 className="text-zinc-300 font-semibold">
                  {user.lastSignin && formatToDate(user.lastSignin)}
                </h1>
              </div>

              <div>
                <label className="text-zinc-400 text-sm">Cargo</label>
                <h1 className="text-zinc-300 font-semibold">
                  {user.studioRole}
                </h1>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Chart
            title="Limite de membros de organização"
            usage={3}
            limit={10}
          />
          <Chart
            title="Limite de empresas para a organização"
            usage={3}
            limit={10}
          />
          <Chart
            title="Limite de clientes para a organização"
            usage={3}
            limit={10}
          />
          <Chart
            title="Limite de jornadas para a organização"
            usage={3}
            limit={10}
          />
          <Chart
            title="Limite de personas para a organização"
            usage={3}
            limit={10}
          />
        </div>
      </LayoutDefault>
    </>
  );
}
