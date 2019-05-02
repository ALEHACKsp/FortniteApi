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
  &.MuiExpansionPanelDetails-root-45 {
    border: 1px solid grey;
  }
`;

const Challenges = ({ challenges }) => {
  const seasonInfo =
    challenges &&
    Object.keys(challenges).map(data => {
      if (data === 'currentweek') {
        return <TitleText> {data + ': ' + challenges[data]}</TitleText>;
      }
      if (data === 'season') {
        return <TitleText> {data + ': ' + challenges[data]}</TitleText>;
      }
    });

  const weeklyChallenges =
    challenges &&
    Object.entries(challenges.challenges).map((data, index) => {
      return (
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                flex: 0,
                border: '3px solid lightgrey',
                borderBottom: 'none',
                padding: '3px 3px'
              }}
            >
              <Text>{data[0]}</Text>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                border: '3px solid lightgrey'
              }}
            >
              <DetailContainer>
                {data[1].map(list => {
                  return <p>{list.challenge}</p>;
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
