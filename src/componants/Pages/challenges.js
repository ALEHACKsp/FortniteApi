import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1.25rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TitleText = styled.p`
  font-family: BurbankBigCondensed-black;
  color: black;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  margin-left: 20px;
`;
const Text = styled.div`
  margin-left: 20px;
`;
const DetailContainer = styled.div`
  width: 100%;
  background-color: lightgrey;

  &.MuiExpansionPanelDetails-root-45 {
    // border: 1px solid grey;
  }
`;

const WeeksList = styled.ul`
  // border: 1px solid blue;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Open Sans', arial, sans-serif;
`;
const Challenges = ({ challenges }) => {
  const seasonInfo =
    challenges &&
    Object.keys(challenges).map((data, key) => {
      if (data === 'currentweek') {
        return (
          <TitleText key={key}> {data + ': ' + challenges[data]}</TitleText>
        );
      }
      if (data === 'season') {
        return (
          <TitleText key={key}> {data + ': ' + challenges[data]}</TitleText>
        );
      }
    });

  const weeklyChallenges =
    challenges &&
    Object.entries(challenges.challenges).map((data, key) => {
      // console.log('data', data[1].value);
      if (data[1].length === 0) {
        return null;
      }
      return (
        <div key={key}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                fontFamily: 'arial, sans-serif',
                linkHeight: '44px',
                textTransform: 'uppercase',
                flex: 0,
                border: '3px solid lightgrey',
                borderBottom: 'none',
                padding: '3px 3px'
              }}
            >
              <Text>{data[1].value}</Text>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                border: '3px solid lightgrey',
                padding: '0'
              }}
            >
              <DetailContainer>
                {data[1].entries.map((list, count, key) => {
                  return (
                    <div key={count}>
                      <WeeksList>
                        {count + 1}. {list.challenge}
                        {/* Difficulty:{list.difficulty} */}
                      </WeeksList>
                    </div>
                  );
                })}
              </DetailContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
    });

  return (
    <Wrapper>
      <TitleContainer>{seasonInfo}</TitleContainer>
      {weeklyChallenges}
    </Wrapper>
  );
};

export default Challenges;
