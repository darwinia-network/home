import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const graphqlClient = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'https://api.subquery.network/sq/darwinia-network/kusama__ZGFyd',
  cache: new InMemoryCache()
});
