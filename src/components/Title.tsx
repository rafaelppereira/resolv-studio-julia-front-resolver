import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowCounterClockwise } from 'phosphor-react';

interface TitleProps {
  title: string;
  description: string;
  previousRoute?: string;
}

export function Title({
  title,
  description,
  previousRoute = '/dashboard',
}: TitleProps) {
  const { pathname } = useRouter();

  const splitPathname = pathname.split('/');

  return (
    <div className="flex flex-col">
      <div className="pb-4 flex items-center gap-3 text-zinc-400 text-sm">
        <Link
          href="/dashboard"
          className="hover:underline hover:text-brand-500 transition-all"
        >
          Dashboard
        </Link>

        {splitPathname.map((path, index) => {
          if (path !== '' && path !== 'dashboard') {
            return (
              <>
                <span>•</span>
                <span key={index}>
                  {path[0].toUpperCase() + path.substring(1)}
                </span>
              </>
            );
          }
        })}
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row gap-4">
          {previousRoute && (
            <Link
              href="/dashboard"
              className="w-10 h-10 shrink-0 bg-zinc-700 flex items-center justify-center rounded-md text-zinc-400 hover:brightness-75 transition-all group"
            >
              <ArrowCounterClockwise
                weight="bold"
                className="group-hover:-rotate-45 transition-all"
              />
            </Link>
          )}

          <div>
            <h1 className="text-2xl font-semibold text-zinc-300">{title}</h1>
            <p className="max-w-md mt-1 text-zinc-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
