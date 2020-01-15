import React, {Component} from 'react';
import propTypes from '@propTypes';
import Title from "@ui/Title";

const Home = ({action, user}) => {
  console.log(action, user)
  return (
    <>
      <Title content="Home-Dashboard"/>
      <h1>Blog Module</h1>
    </>
  )
};

Home.protoTypes = {
  action: propTypes.action,
  user: propTypes.user
};

export default Home;
