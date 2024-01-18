import Link from 'next/link';
import { useState } from 'react';
import { format } from 'date-fns';

import { useAuth } from '@/hooks/useAuth';
import { ptBR } from 'date-fns/locale/pt-BR';
import { BellRinging, Clock, SignOut, X } from 'phosphor-react';

interface HeaderProps {
  disabled?: boolean;
}

export function Header({ disabled = false }: HeaderProps) {
  const { user, handleLogout } = useAuth();

  const [hasToggleProfileDump, setHasToggleProfileDump] = useState(false);
  const [hasToggleNotifications, setHasToggleNotifications] = useState(false);

  const currentDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const avatarText = user.name && user.name.split(' ')[0][0];

  function handleToggleProfileDump() {
    setHasToggleProfileDump(!hasToggleProfileDump);
  }

  function handleToggleNotifications() {
    setHasToggleNotifications(!hasToggleNotifications);
  }

  if (!disabled) {
    return (
      <>
        {hasToggleProfileDump && (
          <div
            onClick={handleToggleProfileDump}
            className="absolute left-0 top-0 w-full h-full z-10 "
          />
        )}

        {hasToggleNotifications && (
          <div
            onClick={handleToggleNotifications}
            className="absolute left-0 top-0 w-full h-full z-10 "
          />
        )}

        <header className="relative z-20 w-full shrink-0 h-16 bg-zinc-800/90 backdrop-blur-sm rounded-md flex items-center justify-between px-5 border-2 border-zinc-700">
          <div className="hidden lg:flex items-center gap-3 text-zinc-300 text-sm">
            <Clock /> {currentDate}
          </div>

          <div className="flex items-center gap-6 select-none">
            <div className="relative">
              <div
                onClick={handleToggleNotifications}
                className="group cursor-pointer w-11 h-11 rounded-full flex items-center justify-center bg-brand-500 text-white"
              >
                {hasToggleNotifications ? (
                  <X size={23} weight="fill" />
                ) : (
                  <BellRinging size={23} weight="fill" />
                )}
                <div className="absolute right-0 top-0 bg-red-500 w-5 h-5 border-4 border-zinc-800 rounded-full flex items-center justify-center text-xs">
                  0
                </div>

                {!hasToggleNotifications && (
                  <div className="opacity-0 z-10 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                    Ver notificações
                    <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
                  </div>
                )}
              </div>
              <div
                className={`${
                  hasToggleNotifications
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible'
                } transition-all absolute right-0 top-16 bg-zinc-800 w-[450px] border-2 border-zinc-700 rounded-md`}
              >
                <div className="absolute right-4 -top-1 w-2 h-2 bg-zinc-800 rotate-45" />

                <div className="flex items-center justify-between px-5 py-4">
                  <h1 className="font-semibold text-sm text-zinc-300">
                    Notificações
                  </h1>
                  <button type="button" className="text-sm text-zinc-300">
                    Marcar todas como lida
                  </button>
                </div>

                <div className="bg-zinc-900 p-2 text-sm px-5 text-zinc-400">
                  <h1>Todas as notificações</h1>
                </div>

                <div className="px-5 py-4 text-sm text-zinc-300">
                  <span>Você não tem notificações</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={handleToggleProfileDump}
                className="hover:bg-zinc-700 w-64 cursor-pointer group relative flex py-2 items-center gap-3 border-l border-r px-6 border-zinc-600 text-left  hover:brightness-100 transition-all"
              >
                <div className="w-11 h-11 bg-zinc-700 rounded-full flex items-center justify-center font-semibold text-zinc-300 border-2 border-zinc-600">
                  {avatarText}
                </div>

                <div className="flex flex-col">
                  <h1 className="text-sm text-zinc-300 font-medium">
                    {user.name}
                  </h1>
                  <p className="text-sm text-zinc-400">{user.email}</p>
                </div>

                {!hasToggleProfileDump && (
                  <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
                    Ver perfil
                    <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
                  </div>
                )}
              </div>
              <div
                className={`${
                  hasToggleProfileDump
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible'
                } transition-all absolute top-16 left-0 bg-zinc-800 w-full border-2 border-zinc-700 rounded-md shadow-sm p-2`}
              >
                <div className="bg-zinc-700 rounded-md flex flex-col items-center p-3">
                  <div className="w-11 h-11 bg-zinc-600 rounded-full flex items-center justify-center font-semibold text-zinc-300 border-2 border-zinc-500">
                    {avatarText}
                  </div>
                  <h1 className="text-zinc-300 mt-2">{user.name}</h1>
                  <p className="text-sm text-zinc-400">{user.email}</p>
                </div>

                <span className="text-xs text-zinc-500 font-semibold mt-2 block border-b border-zinc-700 pb-2">
                  Studio: {user.studioRole}
                </span>

                <div className="mt-2">
                  <div>
                    <label className="text-xs text-zinc-400">
                      Trocar de organização
                    </label>
                    <select className="w-full mt-1 text-sm h-10 px-2 rounded-md bg-zinc-700 text-zinc-400">
                      <option value="">Selecione uma organização</option>
                    </select>
                  </div>

                  <Link
                    href="/editar/organizacao"
                    className="bg-brand-500 w-full text-white mt-2 flex justify-center py-2 text-sm rounded-md"
                  >
                    Editar organização
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title="Clique para sair da plataforma"
              className="p-2 bg-zinc-700 hover:bg-red-400 hover:text-white text-zinc-400 transition-all rounded-md focus:ring-4 focus:ring-zinc-200 outline-none"
            >
              <SignOut size={18} />
            </button>
          </div>
        </header>
      </>
    );
  }
}
