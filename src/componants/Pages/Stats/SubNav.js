import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubNavStyle = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  width: 40%;
  margin: 0 0 0 -52px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', arial, sans-serif;
  > a {
    border: 3px solid #cdcdcd;
    background-color: #e9edf1;
    height: 3rem;
    transform: skew(25deg);
    width: 100%;
    text-decoration: none;
    &.active {
      background-color: grey;
    }
    > h3 {
      color: black;
      transform: skew(-25deg);
    }

    &:hover {
      background-color: black;
      > h3 {
        color: white;
      }
    }
  }
`;

const SubNavigation = () => (
  <SubNavStyle>
    <NavLink to="/lifetime" activeClassName="active">
      <h3>Lifetime</h3>
    </NavLink>
    <NavLink to="/history" activeClassName="active">
      <h3>Match History</h3>
    </NavLink>
    {/* <li><h3>Match History</h3></li> */}
  </SubNavStyle>
);

export default SubNavigation;
