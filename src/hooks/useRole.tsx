import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { RoleProps } from '@/utils/interfaces/role.interface';

export function useRole() {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [rolesData, setRolesData] = useState<RoleProps[]>([]);

  const [filterName, setFilterName] = useState('');
  const [filterTitle, setFilterTitle] = useState('');
  const [filterDescription, setFilterDescription] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/role?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}&title=${filterTitle}&description=${filterDescription}`
      );

      setRolesData(data.items);
      setPage(data.meta.page);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterName, filterDescription, filterTitle]);

  return {
    page,
    rolesData,
    filterName,
    totalItems,
    filterTitle,
    setRolesData,
    setFilterName,
    setTotalItems,
    setFilterTitle,
    registersPerPage,
    filterDescription,
    setFilterDescription,
    reloadWhenChangePage,
  };
}
