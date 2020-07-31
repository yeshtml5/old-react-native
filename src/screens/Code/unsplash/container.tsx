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
  const [unsplashData, SetUnsplashData] = useState<object | undefined>(undefined);

  useEffect(() => {
    unsplash.search
      .photos('sea', 1, 20, { orientation: 'portrait' })
      .then(res => res.json())
      .then(json => {
        SetUnsplashData(json.results);
      });
  }, []);

  return <Presenter unsplashData={unsplashData} />;
}
