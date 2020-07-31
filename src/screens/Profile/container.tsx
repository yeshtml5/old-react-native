/**
 *
 */

import React from 'react';
import Presenter from './presenter';
import { log } from '@app/lib';
import { dummyEmployees } from '@app/API';
import useAxios from 'axios-hooks';

export default function Container() {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://dummy.restapiexample.com/api/v1/employees',
  );

  return !loading && <Presenter data={data} />;
}
