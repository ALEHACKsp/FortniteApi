import React from 'react';

import styled from 'styled-components';


const Wrapper = styled.div`
margin: 1.25rem;
overflow: hidden;
border-left: 1px solid lightgrey;
`

const SubNavStyle = styled.ul`
    list-style: none;
    text-align: center;
    display: flex;
    width: 40%; 
    margin: 0 0 0 -52px;
    > li { 
      border: 1px solid #cdcdcd
      height: 3rem;
      transform: skew(25deg);
      width: 100%;
      > h3 {
        transform: skew(-25deg);
      }
      &:hover {
        background-color: black;
        color: white;
        }
      
    }

   
`
const InformationContainer = styled.div`
border: 1px solid lightgrey;
background-color: lightgrey;
`


const SubNavigation = () => (
          <SubNavStyle>
          <li><h3>Lifetime</h3></li>
          <li><h3>Match History</h3></li>
          </SubNavStyle>
)


const ScoresSection = styled.p`
    font-family: BurbankBigCondensed-Black,sans-serif;
    text-transform: uppercase;
    font-size: 6rem;

`


const Playerstats = ({ stats }) => {

  // console.log("this is the playerstats", stats)

    const scoresSection = stats && stats.filter((misc) => misc.key === 'Matches Played' || misc.key === 'Score')
    .map(data => {
     return (
         <p style={{color: 'white'}}>{data.key} : {data.value}</p>
     )
    })
    const winsSection = stats && stats.filter((wins) => wins.key.includes('Win'))
    .map(data => {
     return (
      <p style={{color: 'blue'}}>{data.key} : {data.value}</p>
     )
    })
    const killsSection = stats && stats.filter((kills) => kills.key === 'Kills' || kills.key === 'K/d')
    .map(data => {
     return (
      <p style={{color: 'green'}}>{data.key} : {data.value}</p>
     )
    })
    const placementSection = stats && stats.filter((top) => top.key.includes('Top'))
    .map(data => {
     return (
      <p style={{color: 'orange'}}>{data.key} : {data.value}</p>
     )
    })
 

    return (
        <Wrapper>
          <SubNavigation/>
          <InformationContainer>
        <ScoresSection>{scoresSection}</ScoresSection>
        {winsSection}
        {killsSection}
        {placementSection}
        </InformationContainer>
        </Wrapper>
    );
}

export default Playerstats;
