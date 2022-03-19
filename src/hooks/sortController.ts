import {useEffect, useState} from 'react';

import {SORT_KEY, ORDER_KEY} from '../types';

export interface SortController {
  sortKey: SORT_KEY | null;
  orderKey: ORDER_KEY | null;
  searchStr: string | null;
  onChangeSortKey: (key: SORT_KEY) => void;
  onChangeOrderKey: (key: ORDER_KEY) => void;
  onChangeSearchValue: (value: string | null) => void;
}
export const useSortController = (): SortController => {
  const [sortKey, setSortKey] = useState<SORT_KEY | null>(null);
  const [orderKey, setOrderKey] = useState<ORDER_KEY | null>(null);
  const [searchStr, setSearchStr] = useState<string | null>(null);

  useEffect(() => {
    if (sortKey && !orderKey) {
      setOrderKey('asc');
    }
  }, [sortKey, orderKey]);

  useEffect(() => {
    if (searchStr) {
      setSortKey(null);
      setOrderKey(null);
    }
  }, [searchStr]);

  const onChangeSortKey = (key: SORT_KEY) => {
    setSortKey(key);
  };
  const onChangeOrderKey = (key: ORDER_KEY) => {
    setOrderKey(key);
  };

  const onChangeSearchValue = (value: string | null) => {
    setSearchStr(value);
  };
  return {
    sortKey,
    orderKey,
    searchStr,
    onChangeOrderKey,
    onChangeSortKey,
    onChangeSearchValue,
  };
};
