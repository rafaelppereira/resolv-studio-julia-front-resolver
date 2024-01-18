import Link from 'next/link';
import { Dispatch, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { CaretDown, Icon } from 'phosphor-react';
import { SubRoutes } from '@/utils/sidebar/generate-routes';

interface NavLinkProps {
  icon: Icon;
  url?: string;
  title: string;
  items?: SubRoutes[];
  routeNameSelect?: string;
  hasToggleSidebar: boolean;
  onToggleSidebar: () => void;
  setRouteNameSelect?: Dispatch<string>;
}

export function NavLink({
  url,
  title,
  items,
  icon: Icon,
  onToggleSidebar,
  routeNameSelect,
  hasToggleSidebar,
  setRouteNameSelect,
}: NavLinkProps) {
  const { pathname } = useRouter();

  const [hasToggleSubItemsMenu, setHasToggleSubItemsMenu] = useState(false);

  function handleHasToggleSubItemsMenu() {
    setHasToggleSubItemsMenu(!hasToggleSubItemsMenu);
  }

  const arrayUrls =
    items &&
    items.map((item) => {
      return item.url;
    });

  useEffect(() => {
    if (routeNameSelect !== '') {
      if (routeNameSelect === title) setHasToggleSubItemsMenu(true);
    }
  }, [routeNameSelect]);

  useEffect(() => {
    if (items) {
      const arrayUrls = items.map((item) => {
        return item.url;
      });

      if (arrayUrls.includes(pathname)) {
        setHasToggleSubItemsMenu(true);
      }
    }
  }, []);

  return (
    <>
      <div className="shrink-0 cursor-pointer flex items-center overflow-hidden bg-zinc-800 w-full rounded-md hover:brightness-75 transition-all">
        <div
          onClick={() => {
            onToggleSidebar();
            if (setRouteNameSelect) setRouteNameSelect(title);
          }}
          className={`${
            pathname === url ? 'text-brand-500' : 'text-zinc-400'
          } w-11 h-11 shrink-0 bg-zinc-700 flex items-center justify-center`}
        >
          <Icon size={18} weight="fill" />
        </div>

        {items ? (
          <div
            onClick={handleHasToggleSubItemsMenu}
            className={`${
              !hasToggleSidebar && 'hidden'
            } duration-300 h-11 select-none transition-all flex items-center justify-between flex-1 px-4`}
          >
            <h1 className="duration-700 transition-all text-sm whitespace-nowrap font-semibold text-white origin-left">
              {title}
            </h1>

            <span
              className={`${
                hasToggleSubItemsMenu && 'rotate-180'
              } transition-all duration-500 text-zinc-400`}
            >
              <CaretDown size={15} />
            </span>
          </div>
        ) : (
          <>
            {url && (
              <Link
                href={url}
                className={`${
                  !hasToggleSidebar && 'hidden'
                } duration-300 h-11 select-none transition-all flex items-center justify-between flex-1 px-4`}
              >
                <h1 className="duration-700 transition-all text-sm whitespace-nowrap font-semibold text-white origin-left">
                  {title}
                </h1>
              </Link>
            )}
          </>
        )}
      </div>

      {items && (
        <div
          className={`${!hasToggleSubItemsMenu && 'hidden'} ${
            !hasToggleSidebar && 'hidden'
          } transition-all duration-700 pl-[20px] flex flex-col gap-4`}
        >
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.url}
                className={`${
                  item.url === pathname
                    ? 'bg-brand-500 text-white'
                    : 'bg-zinc-800 text-zinc-400'
                } px-3 py-1 rounded-md text-sm`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
