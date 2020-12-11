import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'https://rickandmortyapi.com/graphql' });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
