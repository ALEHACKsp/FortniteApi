import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components'
import { Arrow } from "./Navarrows";

const NavContainer = styled.div`
background-color: grey;
height: 4rem;
font-size: 0.98rem;
`

const NavBar = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;
padding-left: 0;
`
const NavListItems = styled.li`
display: flex;
  align-items: center;
  width: 30%;
  text-decoration:none
`

const Nav = (props) => {
   
    return (
    <NavContainer>
     <NavBar>
        <NavListItems>
          <Link to="/playerstats">Player stats<Arrow/></Link>
        </NavListItems>
        <NavListItems>
          <Link to="/challenges">Challanges<Arrow/></Link>
        </NavListItems>
        <NavListItems>
          <Link to="/store">Store<Arrow/></Link>
        </NavListItems>
      </NavBar>
    </NavContainer>
    );
}

export default Nav;