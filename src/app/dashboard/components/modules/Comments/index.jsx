import React, {Component} from 'react';
import propTypes from '@propTypes';
import Title from "@ui/Title";

const Comments = ({action, user}) => {
  console.log(action, user)
  return (
    <>
      <Title content="Comments-Dashboard"/>
      <h1>Comments Module</h1>
    </>
  )
};

Comments.protoTypes = {
  action: propTypes.action,
  user: propTypes.user
};

export default Comments;
