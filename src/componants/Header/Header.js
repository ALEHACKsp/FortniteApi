import React from "react";

import styled from 'styled-components'

const HeaderSection = styled.div`
  background-color: white;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DisplayUsername = styled.h1`
  color: black;
  font-family: Burbank;
  font-weight: 900;
  font-size: 2.5rem;
`

const HeaderLogo = styled.img`
    width: 8rem;
    height: auto;
`


const Header = (props) => {
  
    return (
      <HeaderSection>
        <DisplayUsername>{props.user}</DisplayUsername>
      <HeaderLogo src="https://www.parisgamesweek.com/media/upload/article/content/Fortnite_Black_Logo.png" alt="fortnite"></HeaderLogo>
      </HeaderSection>
    );
  }



export default Header;
