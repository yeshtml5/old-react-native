import { AxiosClient } from '@app/lib';

export const oauthLogin = async (params: FormData) => {
  return await AxiosClient.post('url/token', params);
};

// Dummy RESULT
export const dummyEmployees = async () => {
  return await AxiosClient.get('http://dummy.restapiexample.com/api/v1/employees');
};
