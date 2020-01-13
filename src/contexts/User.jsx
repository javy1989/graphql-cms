import React, {createContext, useState} from 'react';
import {element} from "prop-types";
import {useApolloClient} from "react-apollo-hooks";
import {useCookies} from "react-cookie";
import {getGraphQlError} from 'fogg-utils';

//Mutations
import LOGIN_MUTATION from '@graphql/user/login.mutation';

export const UserContext = createContext({
  login: async () => undefined,
  user: {}
});

const UserProvider = ({children}) => {
  const {mutate} = useApolloClient();
  const [, setCookie] = useCookies(['user']);
  const [user, setUser] = useState([])
};

async function login({email, password})=>
{
  try {

  } catch (e) {
    return getGraphQlError(e)
  }
}

