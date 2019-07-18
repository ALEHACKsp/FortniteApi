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

const Section = styled.div`
padding: 1rem 0rem;
`

const SectionTitle = styled.h2`
text-decoration: underline grey;
// border-bottom: 0.5px solid grey;
// width: 90%;
margin-left: 1rem;
`

const SectionText = styled.h3`
  color: black;
  text-align: center;
  // font-family: 'Roboto Condensed', sans-serif;
  // text-shadow: 1px 1px black;
  white-space: 1rem;
  width: 50%;
`;

const WinsSection = styled(ScoresSection)`
  // background: linear-gradient(to top, #0033cc 21%, #3366ff 78%);
  // margin-left: 5rem;
`;

const KillsSection = styled(ScoresSection)`
  // background: linear-gradient(to top, #ff9900 0%, #ff9933 100%);
  // right: 0;
  // bottom: 0;
  // margin-right: 3rem;
  // margin-bottom: 4rem;
`;



// const PlacementSection = styled(ScoresSection)`
  // display: flex;
//   flex-direction: row;
  // flex-wrap: wrap;
//   place-content: space-evenly;
//   width: 90%;
//   height: 90%;
//   background: linear-gradient(to bottom, #ffccff 0%, #ffffff 100%);
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 97%);
// `;

// const PlacementSectionText = styled.span`
// // font-size: 2.4rem
// padding-left: 4rem;
// @media (max-width: 748px) {
// padding: 1rem;
// }
// &:first-child {

// }
// `;

// const StatsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   border: 3px solid lightgrey;
//   background-color: #e9edf1;
//   border: 1px soild yellow:
//   @media (max-width: 748px) {
//     flex-direction: column;
//   }
// `;

// const InformationContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 47%;
//   @media (max-width: 748px) {
//     width: 100%;
//   }
//   border: 1pc solid purple;
// `;


const Lifetime = ({ stats, location }) => {
  const scoresSection =
    stats &&
    stats
      .filter(misc => misc.key === 'Matches Played' || misc.key === 'Score')
      .map((data, index) => {
        return (
          <SectionText key={index}>
            {data.key} <br/>
            {data.value}
          </SectionText>
        );
      });
  const winsSection =
    stats &&
    stats
      .filter(wins => wins.key.includes('Win'))
      .map((data, index) => {
        return (
          <SectionText key={index}>
            {data.key} <br/>
           {data.value}
          </SectionText>
        );
      });
  const killsSection =
    stats &&
    stats
      .filter(kills => kills.key === 'Kills' || kills.key === 'K/d')
      .map((data, index) => {
        return (
          <SectionText key={index}>
            {data.key} <br/>
            {data.value}
          </SectionText>
        );
      });
  const placementSection =
    stats &&
    stats
      .filter(top => top.key.includes('Top'))
      .map((data, index) => {
        return (
          <SectionText key={index}>
            {data.key} <br/>
            {data.value}
          </SectionText>
        );
      });

  return (
    <Wrapper>
      <SubNavigation />

    <Section>
      <SectionTitle>Overview</SectionTitle>
    <ScoresSection>{scoresSection}</ScoresSection>
    </Section>

    <Section>
      <SectionTitle>Wins</SectionTitle>
      <WinsSection>{winsSection}</WinsSection>
    </Section>

    <Section>
      <SectionTitle>Kills</SectionTitle>
      <KillsSection>{killsSection}</KillsSection>
    </Section>

    <Section>
      <SectionTitle>Top Placements</SectionTitle>
      <ScoresSection> 
                {placementSection &&
                  placementSection.sort((a, b) => {
                    const splitA = a.props.children[0].match(
                      /^\d+|\d+\b|\d+(?=\w)/g
                    );
                    const splitB = b.props.children[0].match(
                      /^\d+|\d+\b|\d+(?=\w)/g
                    );
                    return parseInt(splitA) - parseInt(splitB);
                  })}
              </ScoresSection>
    </Section>
    </Wrapper>
  );
};

export default Lifetime;
