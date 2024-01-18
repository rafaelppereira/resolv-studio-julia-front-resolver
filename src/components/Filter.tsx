import { CaretDoubleDown } from 'phosphor-react';
import { ReactNode, useState } from 'react';

interface FilterProps {
  children: ReactNode;
}

export function Filter({ children }: FilterProps) {
  const [hasToggleFilter, setHasToggleFilter] = useState(false);

  function handleToggleFilter() {
    setHasToggleFilter(!hasToggleFilter);
  }

  return (
    <>
      <div className="relative mt-10 bg-zinc-700 p-3 border-2 border-zinc-600 rounded-md">
        <button
          type="button"
          onClick={handleToggleFilter}
          className="absolute right-0 -top-4 flex items-center gap-2 bg-zinc-600 text-zinc-300 px-4 text-sm py-2 rounded-md"
        >
          <CaretDoubleDown
            size={17}
            className={`${
              hasToggleFilter && 'rotate-180'
            } transition-all duration-500`}
          />{' '}
          Recolher filtro
        </button>

        <div className="flex items-center justify-between border-b border-b-zinc-600 pb-3">
          <h1 className="text-zinc-400 ">Filtrar listagem</h1>
        </div>

        {hasToggleFilter && <>{children}</>}
      </div>
    </>
  );
}
