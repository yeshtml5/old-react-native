/**
 *
 */

import React from 'react';
import Presenter from './presenter';
import { useNavigation } from '@react-navigation/native';

export default function Container() {
  const navigation = useNavigation();

  return <Presenter />;
}
