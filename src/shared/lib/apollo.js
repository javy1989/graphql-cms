//Dependencies
import fetch from "node-fetch";
import {ApolloClient} from 'apollo-boost';
import {InMemoryCache} from "apollo-boost";
import {HttpLink} from "apollo-boost";
import {ApolloLink} from 'apollo-link';

//Configuration
import config from '@config';
import {object} from "prop-types";

export default () => {
  const httpLink = new HttpLink({
    uri: config.api.uri,
    credentials: config.api.credentials,
    fetch
  });

  const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || null,
    addTypename: false
  });

  const client = new ApolloClient({
    connectToDevTools: true,
    link: ApolloLink.from([httpLink]),
    cache
  });
  return client
}
