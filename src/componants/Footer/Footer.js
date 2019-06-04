import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  min-height: 15rem;
  background-color: #292929;
  @media (max-width: 748px) {
    min-height: 26rem;
  }
`;

const Footer = ({}) => {
  return <FooterContainer>{/* <h1>adsads</h1> */}</FooterContainer>;
};

export default Footer;
