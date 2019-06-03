import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

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
  color: white;
  position: absolute;
  right: 0;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  padding-right: 1rem;
  color: green;
`;

const MobileMenu = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 748px) {
    display: none;
  }
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 15px;
  text-decoration: none;

  > a {
    padding: 1rem 0 1rem 0;
    text-decoration: none;
    color: black;
    border-bottom: 1px solid #ddd;
    color: white;
    &.active {
      border-right: 10px solid #ffd8ff;
    }
  }
`;

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

  render() {
    const { user } = this.props;

    return (
      <NavContainer>
        <MobileMenu className="on-mobile">
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
            width={200}
            backgroundColor={'#73787B'}
            display={'flex'}
            flexDirection={'column'}
          >
            <MobileNavList className="test">
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
            </MobileNavList>
          </CheeseburgerMenu>

          <HamburgerMenu
            menuClicked={this.openMenu.bind(this)}
            isOpen={this.state.menuOpen}
            width={40}
            height={35}
            strokeWidth={3}
            rotate={0}
            color="white"
            marginTop={10}
            borderRadius={0}
            animationDuration={0.5}
          />
        </MobileMenu>
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
        <Username>{user}</Username>
      </NavContainer>
    );
  }
}

export default Nav;
