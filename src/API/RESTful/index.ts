import { AxiosClient } from '@app/lib';

export const oauthLogin = async (params: FormData) => {
  return await AxiosClient.post('url/token', params);
};
