import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { ApiProps } from '@/utils/interfaces/api.interface';
import { PageProps } from '@/utils/interfaces/page.interface';

export function usePage() {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [pagesData, setPagesData] = useState<PageProps[]>([]);

  const [filterName, setFilterName] = useState('');
  const [filterDescription, setFilterDescription] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/page?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}&description=${filterDescription}`
      );

      setPagesData(data.items);
      setPage(data.meta.page);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterName, filterDescription]);

  return {
    page,
    pagesData,
    filterName,
    totalItems,
    setPagesData,
    setTotalItems,
    setFilterName,
    registersPerPage,
    filterDescription,
    setFilterDescription,
    reloadWhenChangePage,
  };
}
