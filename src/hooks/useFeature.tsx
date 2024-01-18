import api from '@/libs/axios';
import { useEffect, useState } from 'react';
import { FeatureProps } from '@/utils/interfaces/feature.interface';

export function useFeature() {
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [registersPerPage, setRegistersPerPage] = useState(10);
  const [featuresData, setFeaturesData] = useState<FeatureProps[]>([]);

  const [filterCode, setFilterCode] = useState('');
  const [filterPage, setFilterPage] = useState('');

  async function reloadWhenChangePage(pageNumber: number = 1) {
    try {
      const { data } = await api.get(
        `/feature?page=${pageNumber}&limit=${registersPerPage}&code=${filterCode}&pageFeature=${filterPage}`
      );

      setFeaturesData(data.items);
      setPage(data.meta.page);
      setTotalItems(data.meta.totalItems);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setPage(page);
    reloadWhenChangePage();
  }, [filterCode, filterPage]);

  return {
    page,
    filterCode,
    filterPage,
    totalItems,
    featuresData,
    setFilterPage,
    setTotalItems,
    setFilterCode,
    setFeaturesData,
    registersPerPage,
    reloadWhenChangePage,
  };
}
