import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

import { Close, Search } from "./Navarrows";

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
  margin-top: 3rem;
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

const SearchPlayer = styled.div`
position: absolute;
left: 0;
top: 0;
padding-left: 0.5rem;
padding-top: 0.15rem;
 >svg {
   margin: 0.8rem 0.8rem 0 0;
  &:hover {
    fill: green;
  }
 }

`

const NavInput = styled.div`
display: flex;
padding-bottom: 0.75rem;
`

const InputSearch = styled.div`
  width: 100%;
  > h3 {
    color: black;
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 300;
    text-align: center;
  }
  @media (max-width: 748px) {
    width: 100%;
   
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      value: null,
      error: false,
      isHidden: true
    };
  }


  //  onChange = e => {
  //    console.log("this is e", e.target.value)
  //   this.setState({ value: e.target.value});
  // };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
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

    const onChange = e => {
      this.setState({ value: e.target.value});
    };
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
          {/* <NavListItems>
            <NavLink to="/store" activeClassName="active">
              Store
            </NavLink>
          </NavListItems> */}
        </NavBar>
        
        <MobileMenu className="on-mobile">
        <Username>{user}</Username>
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
            width={250}
            right={true}
            topOffset={50}
            backgroundColor={'#EAEAEA'}
            display={'flex'}
            flexDirection={'column'}
          >
            <MobileNavList className="test">

            <SearchPlayer onClick={this.toggleHidden}>
            <Search></Search>
            </SearchPlayer>

            <CloseMenu onClick={this.closeMenu.bind(this)}>
              <Close></Close>
              </CloseMenu>

              <NavInput >
              { !this.state.isHidden && <InputSearch>
        <h3
          style={{
            color: 'black',
            fontSize: '1rem',
            fontWeight: '300',
            textAlign: "left",
            margin: 0
          }}
        >
          Find user
        </h3>
        <form
          onSubmit={e => {
            e.preventDefault(
              this.props.fetchData(this.state.value)
                .then(data => {
                  return this.props.location.push('/lifetime');
                })
                .catch(error => {
                  // handleError(error);
                  console.log(error);
                })
            );
          }}
        >
          <div
            style={{
              height: '2rem',
              // border: '1px solid red',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <input
              type="text"
              value={this.state.value || ''}
              placeholder=" 'Ninja' "
              style={{
                width: '80%',
                height: '100%',
                border: '0',
                padding: '0',
                backgroundColor: 'lightgrey'
              }}
              onChange={onChange}
            />
            <input
              type="submit"
              value="Go"
              style={{
                opacity: '0.5',
                background: 'lightgreen',
                height: '100%',
                width: '20%',
                color: 'black',
                margin: 0,
                border: '0',
                padding: '0'
              }}
            />
          </div>
        </form>
        {this.state.error ? (
          <div>
            <h2
              style={{
                color: 'red',
                fontSize: '2rem',
                fontWeight: '500'
              }}
            >
              User not found! try again
            </h2>
          </div>
        ) : (
          ''
        )}
      </InputSearch> }
              </NavInput>
            
           
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/lifetime" activeClassName="active">
                Player stats
              </NavLink>
              <NavLink to="/challenges" activeClassName="active">
                Challanges
              </NavLink>
              <NavLink to="/gameSettings" activeClassName="active">
                Game Settings
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
