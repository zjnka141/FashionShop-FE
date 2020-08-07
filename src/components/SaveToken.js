import React from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import queryString from 'query-string';
const SaveToken = (props) => {
  useEffect(() => {
    const query = queryString.parse(props.location.search);
    if (query.token) {
      window.localStorage.setItem('accessToken', query.token);
    }
  }, []);
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default SaveToken;
