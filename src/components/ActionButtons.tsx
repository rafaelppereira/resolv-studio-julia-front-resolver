import { ReactNode } from 'react';
import { PencilSimple, TrashSimple } from 'phosphor-react';

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
  children?: ReactNode;
}

export function ActionButtons({
  children,
  onEdit,
  onDelete,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-3">
      {children}

      <button
        type="button"
        onClick={onEdit}
        className="group relative w-9 h-9 bg-green-600 flex items-center justify-center rounded-full"
      >
        <PencilSimple weight="fill" size={20} />

        <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 -translate-y-1/2 right-11 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
          Editar
          <div className="absolute top-1/2 -right-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
        </div>
      </button>

      <button
        type="button"
        onClick={onDelete}
        className="group relative w-9 h-9 bg-red-500 flex items-center justify-center rounded-full"
      >
        <TrashSimple weight="fill" size={20} />

        <div className="opacity-0 whitespace-nowrap invisible duration-300 group-hover:opacity-100 group-hover:visible absolute top-1/2 -translate-y-1/2 left-11 text-xs bg-zinc-900 rounded-md px-2 py-1 text-zinc-400">
          Deletar
          <div className="absolute top-1/2 -left-[2px] -translate-y-1/2 w-1 h-1 bg-zinc-900 rotate-45" />
        </div>
      </button>
    </div>
  );
}
