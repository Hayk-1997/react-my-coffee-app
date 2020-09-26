import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}coffee`,
  cache: new InMemoryCache(),
  shouldBatch: false
});

export default client;