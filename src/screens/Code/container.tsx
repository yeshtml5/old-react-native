/**
 *
 */

import React, { useState, useEffect } from 'react';
import Presenter from './presenter';
import { useRoute } from '@react-navigation/native';


function Container() {
  // route
  const route = useRoute();

  // useState
  const [contentsName, SetContentsName] = useState<string>('');
console.log('test')
  // useEffect
  useEffect(() => {
    SetContentsName(route.params?.mode);
  }, [route]);

  return <Presenter contentsName={contentsName || 'Unsplash'} />;
}
export default Container;
