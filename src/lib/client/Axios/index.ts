import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { GW_API_BASE_URL, API_REQUEST_TIMEOUT, OAUTH_BASIC_KEY } from '@dosoo/constpack';

class Client {
  private axios: AxiosInstance;
  private token: string | object = OAUTH_BASIC_KEY;

  constructor() {
    this.axios = axios.create({
      baseURL: GW_API_BASE_URL,
      timeout: API_REQUEST_TIMEOUT,

      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token,
      },
    });
  }

  updateAuthorizationToken(accessToken?: string) {
    this.axios.defaults.headers.Authorization = accessToken
      ? {
          toString() {
            return accessToken;
          },
        }
      : OAUTH_BASIC_KEY;
  }

  get<T>(path: string, payload?: any) {
    return this.axios.get<T>(path, payload).then((response: AxiosResponse) => response);
  }

  post(path: string, payload: any) {
    const options = {
      headers: {
        'Content-Type': payload instanceof FormData ? 'multipart/form-data' : 'application/json',
      },
    };

    return this.axios.post(path, payload, options).then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios.put(path, payload).then((result: AxiosResponse) => result);
  }

  delete(path: string, payload?: any) {
    return this.axios.delete(path, payload).then((result: AxiosResponse) => result);
  }
}

const client = new Client();

export default client;
