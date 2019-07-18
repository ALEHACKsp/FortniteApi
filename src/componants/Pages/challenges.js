import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

// import { Hint } from '../Nav/Navarrows'

const Wrapper = styled.div`
  // margin: 1.25rem 0;
  min-height: 75vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TitleText = styled.p`
  font-family: BurbankBigCondensed-black;
  color: black;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 900;
  margin-left: 20px;
  @media (max-width: 748px) {
    margin-left: 0;
  }
`;
const Text = styled.div`
  // margin-left: 20px;
`;
const DetailContainer = styled.div`
  width: 100%;
  // background-color: lightgrey;

  // &.MuiExpansionPanelDetails-root-45 {
  //   // border: 1px solid grey;
  // }
`;

// const WeeksList = styled.tr`
//   // border: 1px solid blue;
//   display: flex;
//   padding: 0;
//   margin: 0;
//   justify-content: space-evenly;
// `;

const Table = styled.table`
table-layout: fixed;
width: 100%;
border-collapse: collapse;
margin-bottom: 0.25rem;
// border-top: 1px solid purple;
// height: 3rem;
@media (max-width: 748px) {
  .col1 {
    width 75%;
  }
  .col2 {
    width 25%;
    text-align: center;
  }
  .col3 {
    width 13%;
  }
}
`
const TableHeader = styled.th`
text-align: center;
font-size: 0.95rem;
padding-bottom: 0.5rem;
padding-top: 0.75rem;
@media (max-width: 748px) {
  text-align: left;
}
`

const TableData = styled.td`
padding: 0.75rem 0;
text-align: center;
// border: 1px solid darkblue;
background-color: lightgrey;
@media (max-width: 748px) {
  text-align: left;
}
`
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
      return null;
    });

  const weeklyChallenges =
    challenges &&
    Object.entries(challenges.challenges).map((data, key) => {
      if (data[1].length === 0) {
        return null;
      }
      return (
        <div key={key}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              style={{
                // fontSize: '1rem',
                // fontWeight: '500',
                // linkHeight: '20px',
                textTransform: 'uppercase',
                flex: 0,
                // border: '3px solid lightgrey',
                // borderBottom: 'none',
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Text>{data[1].value}</Text>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                // border: '2px solid lightgrey',
                padding: '0'
              }}
            >
              <DetailContainer>
                {data[1].entries.map((list, key) => {

                  const getStyle = () => {
                 if (list.difficulty === 'normal') {
                   return {
                    color: 'orange'
                   } 
                  }
                   if (list.difficulty === 'hard') {
                    return {
                       color: 'red'
                     } 
                 }
                  }
                  if (key === 0) {
                    return (
                      <Table key={key}>
                      <thead>
                          <tr>
                          <TableHeader className="col1">Challenge</TableHeader>
                          <TableHeader className="col2">Difficulty</TableHeader> 
                          {/* <TableHeader className="col3">Hint</TableHeader> */}
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                          <TableData className="col1">{list.challenge}</TableData>
                          <TableData className="col2" style={getStyle()}>{list.difficulty}</TableData> 
                          {/* <TableData className="col3"><Hint/></TableData> */}
                          </tr>
                      </tbody>
                  </Table>
                    );
                  } else {
                    return (
                      <Table key={key}>
                      <tbody>
                          <tr>
                          <TableData className="col1">{list.challenge}</TableData>
                          <TableData className="col2" style={getStyle()}>{list.difficulty}</TableData> 
                          {/* <TableData className="col3"><Hint/></TableData> */}
                          </tr>
                      </tbody>
                  </Table>
                    );
                  }
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
