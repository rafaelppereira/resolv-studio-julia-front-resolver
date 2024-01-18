import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  currentPage: number;
  registersPerPage: number;
  totalCountOnRegisters: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1;
  });
}

export function Pagination({
  onPageChange,
  currentPage = 1,
  registersPerPage = 10,
  totalCountOnRegisters,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOnRegisters / registersPerPage);

  const previosPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  if (previosPages.includes(0)) previosPages.splice(previosPages.indexOf(0), 1);

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center gap-4">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <span className="text-gray-400 text-xl">...</span>
            )}
          </>
        )}

        {previosPages.length > 0 &&
          previosPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <span className="text-gray-400 text-xl">...</span>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </div>
  );
}
