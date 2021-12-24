import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphqlClient = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: "https://api.subquery.network/sq/darwinia-network/kusama__ZGFyd",
  uri: "https://api.subquery.network/sq/darwinia-network/home-plo-polkadot", // prod
  // uri: "https://api.subquery.network/sq/darwinia-network/polkadot__ZGFyd", // staging
  cache: new InMemoryCache(),
});
