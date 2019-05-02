import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubNavStyle = styled.ul`
    list-style: none;
    text-align: center;
    display: flex;
    width: 40%; 
    margin: 0 0 0 -52px;

    > a { 
      border: 3px solid #cdcdcd;
      background-color: #e9edf1;
      height: 3rem;
      transform: skew(25deg);
      width: 100%;
      text-decoration: none;
      > a {
        text-decoration: none;
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
    }s
`;

const SubNavigation = () => (
  <SubNavStyle>
    <Link to="/lifetime">
      <h3>Lifetime</h3>
    </Link>
    <Link to="/history">
      <h3>Match History</h3>
    </Link>
    {/* <li><h3>Match History</h3></li> */}
  </SubNavStyle>
);

export default SubNavigation;
