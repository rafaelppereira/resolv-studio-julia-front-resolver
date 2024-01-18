import { ReactNode } from 'react';
import { Pagination } from './pagination';

interface TableProps {
  tHeadOptions: string[];
  children: ReactNode;
  currentPage: number;
  registersPerPage: number;
  totalCountOnRegisters: number;
  onPageChange: (page: number) => void;
}

export function Table({
  children,
  currentPage,
  onPageChange,
  tHeadOptions,
  registersPerPage,
  totalCountOnRegisters,
}: TableProps) {
  return (
    <div className="mt-5">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr>
            {tHeadOptions.map((opt, index) => {
              return (
                <th
                  key={index}
                  className="px-4 bg-zinc-900 text-zinc-500 py-3 text-md font-semibold"
                >
                  {opt}
                </th>
              );
            })}
            <th className="px-4 bg-zinc-900 text-zinc-500 py-3 text-md font-semibold rounded-tr-md">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
      <div className="bg-zinc-900 w-full rounded-b-md px-3 py-4">
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          registersPerPage={registersPerPage}
          totalCountOnRegisters={totalCountOnRegisters}
        />
      </div>
    </div>
  );
}
