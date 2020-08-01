/**
 *
 */

import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import useAxios from 'axios-hooks';
import Unsplash from 'unsplash-js/native';

const unsplash = new Unsplash({
  accessKey: '849846af9ffe164d8cb60cdcd5368280beb800d77021d96bbf08003bc51cf5fa',
});

export default function Container() {
  // useState
  const [searchQuery, setSearchQuery] = useState('sea');
  const [unsplashData, SetUnsplashData] = useState<object | undefined>(undefined);

  const onChange = () => {
    console.log(searchQuery);
  };
  useEffect(() => {
    unsplash.search
      .photos(searchQuery, 1, 20)
      .then(res => res.json())
      .then(json => {
        SetUnsplashData(json.results);
      });
  }, [searchQuery]);

  return (
    <Presenter
      onChange={onChange}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      unsplashData={unsplashData}
    />
  );
}
