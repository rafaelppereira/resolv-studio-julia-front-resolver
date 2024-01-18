import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { UserAuthorizationProps } from '@/utils/interfaces/user.interface';

export function useUser() {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [usersData, setUsersData] = useState<UserAuthorizationProps[]>([]);

  const [filterName, setFilterName] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterRole, setFilterRole] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/user?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}&email=${filterEmail}&role=${filterRole}`
      );

      setUsersData(data.items);
      setPage(data.meta.page);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterName, filterEmail, filterRole]);

  return {
    page,
    usersData,
    filterName,
    totalItems,
    filterRole,
    filterEmail,
    setUsersData,
    setFilterName,
    setTotalItems,
    setFilterRole,
    setFilterEmail,
    registersPerPage,
    reloadWhenChangePage,
  };
}
