import React from 'react';
import Presenter from './presenter';
import { useRoute } from '@react-navigation/native';

function Container() {
  const route = useRoute();

  return <Presenter params={route.params} />;
}
export default Container;
