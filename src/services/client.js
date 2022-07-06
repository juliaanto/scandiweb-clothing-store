import { ApolloClient, InMemoryCache } from '@apollo/client';

const BACKEND_URL = 'http://localhost:4000/';

const client = new ApolloClient({
  uri: BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;