import QS from 'qs';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { UseFiltersReturnPropsTypes } from '@/@types/types';

export const useQueryParams = (filters: UseFiltersReturnPropsTypes) => {
  const isMounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        stock: filters.inStock,
        size: Array.from(filters.sizes),
        gender: Array.from(filters.gender),
        brand: Array.from(filters.selectedBrands),
        color: Array.from(filters.selectedColors),
      };

      const queryString = QS.stringify(params, {
        arrayFormat: 'comma',
      });

      router.push(`?${queryString}`, { scroll: false });
    }

    isMounted.current = true;
  }, [filters]);
};
