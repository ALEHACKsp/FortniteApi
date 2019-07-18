import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubNavStyle = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  width: 40%;
  margin: 0 0 0 -52px;
  font-weight: 700;
  font-family: 'Open Sans', arial, sans-serif;
  @media (max-width: 748px) {
    width: 90%;
    font-size: 14px;
  }
  > a {
    border: 3px solid #cdcdcd;
    background-color: #e9edf1;
    height: 3rem;
    transform: skew(25deg);
    width: 30%;
    text-decoration: none;
    &.active {
      background-color: grey;
    }
    > h4 {
      color: black;
      transform: skew(-25deg);
    }
    // black on hover
    // &:hover {
    //   background-color: black;
    //   >  {
    //     color: white;
    //   }
    // }
  }
`;

const SubNavigation = () => (
  <SubNavStyle>
    <NavLink to="/lifetime" activeClassName="active">
      <h4>Lifetime</h4>
    </NavLink>
    <NavLink to="/history" activeClassName="active">
      <h4>Match History</h4>
    </NavLink>
    <NavLink to="/current" activeClassName="active">
      <h4>Current</h4>
    </NavLink>
  </SubNavStyle>
);

export default SubNavigation;
