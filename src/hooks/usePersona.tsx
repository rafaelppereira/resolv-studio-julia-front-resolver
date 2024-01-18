import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { PersonaProps } from '@/utils/interfaces/persona.interface';

export function usePersona() {
  const [page, setPage] = useState(1);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [personasData, setPersonasData] = useState<PersonaProps[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const [filterName, setFilterName] = useState('');
  const [filterOrganization, setFilterOrganization] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/persona?page=${pageNumber}&limit=${registersPerPage}&name=${filterName}`
      );

      setPersonasData(data.items);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterName, filterOrganization, filterCompany]);

  return {
    page,
    filterName,
    totalItems,
    personasData,
    filterCompany,
    setFilterName,
    setPersonasData,
    setFilterCompany,
    registersPerPage,
    filterOrganization,
    reloadWhenChangePage,
    setFilterOrganization,
  };
}
