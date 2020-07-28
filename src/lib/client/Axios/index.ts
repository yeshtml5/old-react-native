import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Client {
  private axios: AxiosInstance;
  private token: string | object = '';

  constructor() {
    this.axios = axios.create({
      baseURL: 'GW_API_BASE_URL',
      timeout: 1000,
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
      : '';
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
