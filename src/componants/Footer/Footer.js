import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 10vh;
  background-color: #292929;
  color: white;
  // @media (max-width: 748px) {
  //   min-height: 26rem;
  // }
`;

const Footer = ({}) => {
  return <FooterContainer>
  {/* <h1>adsads</h1> */}
  About
  Contact
  </FooterContainer>;
};

export default Footer;
