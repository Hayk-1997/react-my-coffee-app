import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({ uri: `${process.env.REACT_APP_API_URL}coffee` });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    }
  });
  return forward(operation);
});

const logoutLink = onError(({ graphQLErrors, networkError, operation, response }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => (console.log('[GraphQL error]: Message: ' + message + ', Location:' + { ...locations } + ', Path:' + path)));
  if (networkError) console.log(`[Network error]: ${networkError}`, networkError);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([logoutLink.concat(authMiddleware), logoutLink.concat(httpLink)]),
});

// const client = new ApolloClient({
//   uri: `${process.env.REACT_APP_API_URL}coffee`,
//   operation.setContext({
//     headers: {
//       authorization: localStorage.getItem('token') || null,
//     }
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: false
// });

export default client;