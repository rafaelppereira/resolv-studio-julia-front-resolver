interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent,
  onPageChange,
}: PaginationItemProps) {
  return (
    <button
      className={`${
        isCurrent ? 'bg-brand-500' : 'bg-zinc-700'
      } w-9 h-9 rounded-md flex items-center justify-center transition-all text-zinc-300 font-semibold`}
      type="button"
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  );
}
