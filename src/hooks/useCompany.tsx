import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { CompanyProps } from '@/utils/interfaces/company.interface';

export function useCompany() {
  const [page, setPage] = useState(1);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [companiesData, setCompaniesData] = useState<CompanyProps[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const [filterName, setFilterName] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/company?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}`
      );

      setCompaniesData(data.items);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterName]);

  return {
    page,
    filterName,
    totalItems,
    setFilterName,
    companiesData,
    registersPerPage,
    setCompaniesData,
    reloadWhenChangePage,
  };
}
