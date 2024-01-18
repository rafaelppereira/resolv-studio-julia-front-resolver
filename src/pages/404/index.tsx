import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound404() {
  return (
    <>
      <Head>
        <title>Não conseguimos achar essa rota | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <div className="w-full min-h-screen bg-zinc-900 flex items-center">
        <div className="max-w-7xl mx-auto flex items-center w-full gap-5">
          <div className="flex-1 flex justify-center">
            <Image src="/404.svg" alt="Galáxia" width={500} height={500} />
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <h1 className="text-9xl font-extrabold text-brand-500">404...</h1>
              <h3 className="text-4xl text-white mt-2 font-semibold">
                Repito, 404. Câmbio!
              </h3>

              <span className="block mt-6 text-green-500 font-semibold">
                Studio Jul.IA responde:
              </span>
              <p className="mt-3 text-zinc-300">
                Acho que você se perdeu no mundo dos CHATBOTS. <br /> A página
                que você requisitou não foi encontrada.
              </p>

              <Link
                href="/dashboard"
                className="mt-6 inline-block bg-brand-500 px-10 py-3 rounded-md text-white font-semibold"
              >
                Retornar à home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
