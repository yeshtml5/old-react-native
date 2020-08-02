/**
 *
 */

import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import Unsplash from 'unsplash-js/native';

const unsplash = new Unsplash({
  accessKey: '849846af9ffe164d8cb60cdcd5368280beb800d77021d96bbf08003bc51cf5fa',
});

export default function Container() {
  // const
  const LIST_COUNT_PER_PAGE = 30;
  // useState
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('design');
  const [unsplashData, SetUnsplashData] = useState<object | null>(null);

  // getNextPage
  const getNextPageContents = () => {
    setCurrentPage(currentPage + 1);
  };

  // useEffect
  useEffect(() => {
    unsplash.search
      .photos(searchQuery, currentPage, LIST_COUNT_PER_PAGE)
      .then(res => res.json())
      .then(json => {
        SetUnsplashData(json.results);
      });
  }, [searchQuery, currentPage]);

  return (
    unsplashData && (
      <Presenter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        unsplashData={unsplashData}
        getNextPageContents={getNextPageContents}
      />
    )
  );
}
