import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
// import { Arrow } from "./Navarrows";

const NavContainer = styled.div`
  background-color: #2a2a2a;
  display: flex;
  height: 4rem;
  box-sizing: border-box;
`;

const NavBar = styled.ul`
  display: flex;
  padding: 0 1.25rem;
  margin: 0;
  list-style: none;
  line-height: 44px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', arial, sans-serif;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  text-decoration: none;
  box-sizing: border-box;
`;
const NavListItems = styled.li`
  box-sizing: border-box

  &:hover {
    border-bottom: 5px solid #ffd8ff;
    box-sizing: border-box;
  }

  &:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: white;
    // border: 10px solid #FFD8FF:
    box-sizing: border-box;
  }
`;

const Username = styled.span`
  color: white;
  position: absolute;
  right: 0;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  padding-right: 1rem;
  color: green;
`;

const Nav = ({ user }) => {
  return (
    <NavContainer>
      <NavBar>
        <NavListItems>
          <Link to="/">Home</Link>
        </NavListItems>
        <NavListItems>
          <Link to="/lifetime">Player stats</Link>
        </NavListItems>
        <NavListItems>
          <Link to="/challenges">Challanges</Link>
        </NavListItems>
        <NavListItems>
          <Link to="/store">Store</Link>
        </NavListItems>
      </NavBar>
      <Username>{user}</Username>
    </NavContainer>
  );
};

export default Nav;
