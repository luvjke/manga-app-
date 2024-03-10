import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './SearchPage.module.scss';
import { useGetSeachValueQuery } from '../../redux/api/Services';
import { MangaBlock } from '../../components/common/MangaBlock';
import { AdvancedSearch } from '../../components/common/AdvancedSearch';

export const SearchPage = () => {
  const location = useLocation();
  const searchValue: string = location.state ? location.state[0] : '';

  const { data: SearchArray } = useGetSeachValueQuery(searchValue);
  const ObjectData = [
    {
      items: SearchArray?.data,
    },
  ];

  return (
    <main>
      <div className={styles.layout}>
        <div className={styles.advanced}>
          <AdvancedSearch />
        </div>
        <div>{ObjectData?.map((props, index) => <MangaBlock {...props} key={index} />)}</div>
      </div>
    </main>
  );
};
