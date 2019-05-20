import React, { useState } from 'react';

import styled from 'styled-components';

const HomePage = styled.div`
  width: 100%;
  height: auto;
  > img {
    width: 100%;
    height: auto;
  }
`;

const InputSearch = styled.div`
  width: 30%;
  position: absolute;
  // right: 0;
  padding-left: 30px;
  top: 0;
  margin-top: 16rem;
`;
// Todo - add function that checks the status and display a color effect
const NotFound = ({}) => {
  return <h1>not found</h1>;
};

export default NotFound;
