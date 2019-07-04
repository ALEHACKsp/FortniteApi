import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

import { Close } from "./Navarrows";

const NavContainer = styled.div`
  background-color: #2a2a2a;
  display: flex;
  height: 4rem;
  box-sizing: border-box;
  @media (max-width: 748px) {
   height: 50px;
  }
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
  @media (max-width: 748px) {
    display: none;
    
  }
`;
const NavListItems = styled.li`
  &:hover {
    border-bottom: 5px solid #ffd8ff;
    box-sizing: border-box;
  }

  &:hover,
  &.active,
  a:visited,
  a:link {
    text-decoration: none;
    color: white;
    box-sizing: border-box;
  }
`;

const Username = styled.span`
  color: green;
  display: block;
  @media (max-width: 748px) { 
  }
`;

const MobileMenu = styled.div`
display: none;

  @media (max-width: 748px) {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 15px;
  text-decoration: none;
  margin-top: 3.5rem;
  > a {
    margin-bottom: 1rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
    &.active {
      color: #ffd8ff;
      color: blue;
      font-weight: bold;
    }
  }
`;
const CloseMenu = styled.div`
position: absolute;
right: 0;
top: 0;
 >svg {
   margin: 0.8rem 0.8rem 0 0;
  &:hover {
    fill: #DA4567;
  }
 }

`

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  getStyle() {
    if (this.state.menuOpen === true) {
      return "#ffd8ff"
    }
 
  }

  render() {
    const { user } = this.props;

    return (
      <NavContainer>
        <NavBar>
          <NavListItems>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </NavListItems>
          <NavListItems>
            <NavLink to="/lifetime" activeClassName="active">
              Player stats
            </NavLink>
          </NavListItems>
          <NavListItems>
            <NavLink to="/challenges" activeClassName="active">
              Challanges
            </NavLink>
          </NavListItems>
          <NavListItems>
            <NavLink to="/store" activeClassName="active">
              Store
            </NavLink>
          </NavListItems>
        </NavBar>
        
        <MobileMenu className="on-mobile">
        <Username>{user}</Username>
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
            width={200}
            right={true}
            topOffset={50}
            backgroundColor={'#EAEAEA'}
            display={'flex'}
            flexDirection={'column'}
          >
            <MobileNavList className="test">
            <CloseMenu onClick={this.closeMenu.bind(this)}>
              <Close></Close>
              </CloseMenu>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/lifetime" activeClassName="active">
                Player stats
              </NavLink>
              <NavLink to="/challenges" activeClassName="active">
                Challanges
              </NavLink>
              <NavLink to="/store" activeClassName="active">
                Daily Store
              </NavLink>
              <NavLink to="/news" activeClassName="active">
                News
              </NavLink>
            </MobileNavList>
          </CheeseburgerMenu>
    
          <HamburgerMenu
            menuClicked={this.openMenu.bind(this)}
            color={this.state.menuOpen === false ? "white": this.getStyle()}
            isOpen={false}
            width={25}
            height={20}
            margin={16}
            strokeWidth={3}
            rotate={0}
            borderRadius={0}
            animationDuration={0.5}
            disableAutoFocus={false}
          />
          
        </MobileMenu>
      </NavContainer>
    );
  }
}

export default Nav;
