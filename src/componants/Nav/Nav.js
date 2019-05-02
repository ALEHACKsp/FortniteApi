import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
// import { Arrow } from "./Navarrows";

const NavContainer = styled.div`
  background-color: #2a2a2a;
  display: flex;
  height: 4rem;
`;

const NavBar = styled.ul`
  display: flex;
  padding: 0 1.25rem;
  margin: 0;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  text-decoration: none;
`;
const NavListItems = styled.li`
&:hover, a:visited, a:link, a:active
{
    text-decoration: none;
    color: white;
    border: 10px solid yellow:
}
`;

const Nav = props => {
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
    </NavContainer>
  );
};

export default Nav;
