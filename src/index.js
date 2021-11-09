import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import i18n from './locales/i18n';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { withTranslation } from "react-i18next";

// Graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'https://api.subquery.network/sq/darwinia-network/kusama__ZGFyd',
  cache: new InMemoryCache()
});

const TransApp = withTranslation()(App);
ReactDOM.render(
  <ApolloProvider client={client}>
    <TransApp />
  </ApolloProvider>, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
