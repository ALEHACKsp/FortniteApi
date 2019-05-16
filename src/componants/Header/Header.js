import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderSection = styled.div`
  background-color: white;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-family: Burbank;
  font-weight: 900;
  color: black;
  padding: 0 1.25rem;
`;

const HeaderLogo = styled.img`
  width: 8rem;
  height: auto;
`;

// Todo - add function that checks the status and display a color effect

const Header = ({ user, status }) => {
  return (
    <HeaderSection>
      <Link to="/">
        Logo
        <HeaderLogo
        // src="https://www.parisgamesweek.com/media/upload/article/content/Fortnite_Black_Logo.png"
        // alt="fortnite"
        />
      </Link>

      <p>{status && status.message}</p>
      <p>{user}</p>
    </HeaderSection>
  );
};

export default Header;
