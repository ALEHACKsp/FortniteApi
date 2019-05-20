import React from 'react';
import SubNavigation from './SubNav';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2.5rem 1.25rem
  overflow: hidden;
  border-left: 1px solid lightgrey;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`;

const ScoresSection = styled.p`
  display: flex;
  justify-content: space-around;
  font-family: BurbankBigCondensed-black;
  width: 100%;
  height: 6rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 900;
  background: linear-gradient(to top, #00cc66 0%, #009900 100%);
  clip-path: polygon(2% 8%, 98% 2%, 99% 97%, 1% 91%);
  margin-left: 2rem;
`;
const SectionText = styled.span`
  color: white;
  margin-top: 2rem;
`;

const WinsSection = styled(ScoresSection)`
  background: linear-gradient(to top, #0033cc 21%, #3366ff 78%);
  margin-left: 5rem;
`;

const KillsSection = styled(ScoresSection)`
  background: linear-gradient(to top, #ff9900 0%, #ff9933 100%);
  right: 0;
  bottom: 0;
  margin-right: 3rem;
  margin-bottom: 4rem;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 3px solid lightgrey;
  background-color: #e9edf1;
`;

const PlacementSection = styled(ScoresSection)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: space-evenly;
  width: 90%;
  height: 90%;
  background: linear-gradient(to bottom, #ffccff 0%, #ffffff 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 97%);
`;

const PlacementSectionText = styled.span`
font-size: 2.4rem
padding-left: 4rem;
&:first-child {

// padding-left: 100px;
}
`;

const Lifetime = ({ stats, location }) => {
  // console.log('stats', stats);
  // if (stats === null) {
  //   return location.history.push('/');
  // }
  const scoresSection =
    stats &&
    stats
      .filter(misc => misc.key === 'Matches Played' || misc.key === 'Score')
      .map((data, index) => {
        return (
          <SectionText key={index}>
            {data.key} : {data.value}
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
            {data.key} : {data.value}
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
            {data.key} : {data.value}
          </SectionText>
        );
      });
  const placementSection =
    stats &&
    stats
      .filter(top => top.key.includes('Top'))
      .map((data, index) => {
        return (
          <PlacementSectionText key={index} style={{ color: 'black' }}>
            {data.key} : {data.value}
          </PlacementSectionText>
        );
      });

  return (
    <Wrapper>
      <SubNavigation />
      <StatsContainer>
        <InformationContainer>
          <ScoresSection>{scoresSection}</ScoresSection>
          <WinsSection>{winsSection}</WinsSection>
          <KillsSection>{killsSection}</KillsSection>
        </InformationContainer>

        <InformationContainer>
          <PlacementSection>
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
          </PlacementSection>
        </InformationContainer>
      </StatsContainer>
    </Wrapper>
  );
};

export default Lifetime;
