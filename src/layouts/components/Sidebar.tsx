import Image from 'next/image';
import { useState } from 'react';
import { NavLink } from './NavLink';

import { HelpCircle } from 'lucide-react';
import { CaretDoubleRight } from 'phosphor-react';
import { routes } from '@/utils/sidebar/generate-routes';

export function Sidebar() {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false);
  const [routeNameSelect, setRouteNameSelect] = useState('');

  function handleToggleSidebar() {
    setHasToggleSidebar(!hasToggleSidebar);
  }

  return (
    <aside
      className={`${
        hasToggleSidebar ? 'w-60' : 'w-20'
      } duration-300 z-10 h-screen bg-zinc-900 flex flex-col rounded-r-xl border-r-2 border-t-2 border-b-2 border-zinc-700 relative`}
    >
      <button
        type="button"
        onClick={handleToggleSidebar}
        className={`${
          hasToggleSidebar && '-rotate-180'
        } duration-500 transition-all absolute -right-3 top-16 w-7 h-7 bg-zinc-700 border border-zinc-600 rounded-full flex items-center justify-center text-zinc-400`}
      >
        <CaretDoubleRight size={14} />
      </button>
      <div className="p-[18px] w-full border-b border-zinc-700 h-20 flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo Resolv.AI"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <h1
          className={`${
            !hasToggleSidebar && 'hidden'
          } font-din-pro-bold duration-700 transition-all text-[22px] whitespace-nowrap font-semibold text-white origin-left`}
        >
          Studio Jul.IA
        </h1>
      </div>
      <div className="p-[18px] flex flex-col gap-4 flex-1 h-[calc(100vh-5rem)] overflow-y-auto">
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              url={route.url}
              icon={route.icon}
              title={route.title}
              items={route.items}
              routeNameSelect={routeNameSelect}
              hasToggleSidebar={hasToggleSidebar}
              onToggleSidebar={handleToggleSidebar}
              setRouteNameSelect={setRouteNameSelect}
            />
          );
        })}
      </div>

      <div className="p-[18px]">
        <NavLink
          title="Ajuda"
          url="/suporte"
          icon={HelpCircle}
          hasToggleSidebar={hasToggleSidebar}
          onToggleSidebar={handleToggleSidebar}
        />
      </div>
    </aside>
  );
}
