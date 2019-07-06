import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.div`
height: 20vh;
background-color: #292929;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
  // @media (max-width: 748px) {
  //   min-height: 26rem;
  // }
  > h5 {
    text-align: center;
  }
`;

const FooterNav = styled.div`
display: flex;
justify-content: space-evenly;
// margin-bottom: 1.2rem;
font-size: 1.25rem;


> a {
  text-decoration: none;
  color: white;
}
`

const Footer = ({}) => {
  return <FooterContainer>
  {/* <h1>adsads</h1> */}
  <FooterNav>
  <h5>
  About
    </h5>
    <h5>
    Contact
    </h5>
  {/* <NavLink to="/" activeClassName="active">About</NavLink>
  <NavLink to="/" activeClassName="active">Contact</NavLink> */}
  </FooterNav>
  <h5>
  ©Unvaulted is not associated with Epic Games
    </h5>
  </FooterContainer>;
};

export default Footer;
