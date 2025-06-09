import { ApolloClient, InMemoryCache } from '@apollo/client';

const SERVER_URL = 'http://localhost:3001'; // normally would be an env var

const apolloClient = new ApolloClient({
  uri: `${SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
