import React from 'react';
import SubNavigation from './SubNav';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 2.5rem 0;
  overflow: hidden;
  border-left: 1px solid lightgrey;
  @media (max-width: 748px) {
    margin: 2.5rem 0;
  }
  // border: 1pc solid red;
`;


const SectionText = styled.h3`
  color: black;
  text-align: center;
  white-space: 1rem;
  width: 50%;
`;

const Section = styled.div`
padding: 1rem 0rem;
background-color: #e9edf1;
`
const SectionTitle = styled.h2`
text-decoration: underline grey;
margin-left: 1rem;
`

const ScoresSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  // font-family: BurbankBigCondensed-black;
  // width: 100%;
  // height: 6rem;
  // text-transform: uppercase;
  // font-size: 1.7rem;
  // font-weight: 900;
  // background: linear-gradient(to top, #00cc66 0%, #009900 100%);
  // clip-path: polygon(2% 8%, 98% 2%, 99% 97%, 1% 91%);
  // margin-left: 2rem;
  @media (max-width: 748px) {
    display: flex;
    // margin: 0.5rem 0 0.5rem 0;
    // font-size: 1.3rem;
    // justify-content: space-around;
    // margin: 0 auto;
  }
`;

const CurrentSeason = ({ season }) => {   
    // const { curr_p2, curr_p9, curr_p10 } = season;

const solo = Object.keys(season.curr_p2).slice(1,11).map((data,key) => {
    return (
        <SectionText key={key}>
        {season.curr_p2[data].label}  <br/>
        {season.curr_p2[data].value}
      </SectionText>
    )
})
const duo = Object.keys(season.curr_p9).slice(1,11).map((data,key) => {
    return (
        <SectionText key={key}>
        {season.curr_p9[data].label}  <br/>
        {season.curr_p9[data].value}
      </SectionText>
    )
})
const squad = Object.keys(season.curr_p10).slice(1,11).map((data,key) => {
    return (
        <SectionText key={key}>
        {season.curr_p10[data].label}  <br/>
        {season.curr_p10[data].value}
      </SectionText>
    )
})

 

  return (
  <Wrapper>
      <SubNavigation/>

      <Section>
      <SectionTitle>Solo</SectionTitle>
    <ScoresSection>{solo}</ScoresSection>
    </Section>

    <Section>
      <SectionTitle>Duo</SectionTitle>
    <ScoresSection>{duo}</ScoresSection>
    </Section>

    <Section>
      <SectionTitle>Squad</SectionTitle>
    <ScoresSection>{squad}</ScoresSection>
    </Section>

  </Wrapper>
  );
};

export default CurrentSeason;
