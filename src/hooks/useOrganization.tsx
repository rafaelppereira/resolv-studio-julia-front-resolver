import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { OrganizationProps } from '@/utils/interfaces/organization.interface';

export function useOrganization() {
  const [page, setPage] = useState(1);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [organizationsData, setOrganizationsData] = useState<
    OrganizationProps[]
  >([]);

  const [totalItems, setTotalItems] = useState(0);

  const [filterName, setFilterName] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/organization?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}`
      );

      setOrganizationsData(data.items);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
    setFilterName(filterName);
  }, [filterName]);

  return {
    page,
    totalItems,
    filterName,
    setFilterName,
    registersPerPage,
    organizationsData,
    setOrganizationsData,
    reloadWhenChangePage,
  };
}
