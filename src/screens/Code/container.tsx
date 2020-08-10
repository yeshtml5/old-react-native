/**
 *
 */

import React, { useState, useEffect } from 'react';
import Presenter from './presenter';
import { useRoute } from '@react-navigation/native';

type RouteParamsType = {
  mode: string;
};

function Container() {
  const route = useRoute();
  const [contentsName, SetContentsName] = useState<string | null>(null);

  useEffect(() => {
    const { mode } = route.params as RouteParamsType;
    SetContentsName(mode);
  }, [route]);

  console.log('contentsName ' + contentsName);

  return contentsName !== null && <Presenter contentsName={contentsName || 'Unsplash'} />;
}
export default Container;
