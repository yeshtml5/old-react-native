import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';

import { storage, validateTokenExp } from '@dosoo/lib';
import { DOSOO_API_BASE_URL, STORAGE_ACCESS_INFO, OAUTH_BASIC_KEY } from '@dosoo/constpack';

const httpLink = new HttpLink({
  uri: `${DOSOO_API_BASE_URL}`,
});

const cache = new InMemoryCache();

const authLink = setContext(async (_, { headers }) => {
  const token = await storage.get(STORAGE_ACCESS_INFO.ACCESS_TOKEN);
  const isTokenValid = await validateTokenExp();

  return {
    headers: {
      ...headers,
      Authorization: isTokenValid ? `Bearer ${token}` : OAUTH_BASIC_KEY,
    },
  };
});

const httpAuthLink = authLink.concat(httpLink);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.warn(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

    if (networkError) {
      console.warn(`[Network error]: ${networkError}`);
    }
  }
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([httpAuthLink, errorLink]),
  cache,
});

export default apolloClient;
