import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { ApiProps } from '@/utils/interfaces/api.interface';

export function useApi() {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [apisData, setApisData] = useState<ApiProps[]>([]);

  const [filterMethod, setFilterMethod] = useState('');
  const [filterPath, setFilterPath] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/api?page=${pageNumber}&limit=${registersPerPage}&method=${filterMethod}&path=${filterPath}`
      );

      setApisData(data.items);
      setPage(data.meta.page);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
    setFilterMethod(filterMethod);
  }, [filterMethod, filterPath]);

  return {
    page,
    apisData,
    filterPath,
    totalItems,
    setApisData,
    filterMethod,
    setTotalItems,
    setFilterPath,
    setFilterMethod,
    registersPerPage,
    reloadWhenChangePage,
  };
}
