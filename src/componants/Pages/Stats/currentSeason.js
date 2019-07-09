import React from 'react';
import SubNavigation from './SubNav';
import styled from 'styled-components';

// const moment = require('moment');

const Wrapper = styled.div`
  margin: 2.5rem 1.25rem
  overflow: hidden;
  border-left: 1px solid lightgrey;
  // overflow-y:hidden;
  @media (max-width: 748px) {
    margin: 2.5rem 0;
  }
`;

const CurrentSeason = ({ season }) => {
console.log("season p2", season)
const solo = Object.keys(season.curr_p2).slice(1,11).map(data => {
    // console.log("score, scorePerMatch, top1, top3, top5, top 6, top10, top12, top25, kd, kills, matches. winRatio, kills, kpg, kd", data)
    return (
        <div> 
            <h3>{season.curr_p2[data].label} {season.curr_p2[data].value}</h3>
        </div>
    )
})
const duo = Object.keys(season.curr_p9).slice(1,11).map(data => {
    return (
        <div> 
            <h3>{season.curr_p9[data].label} {season.curr_p9[data].value}</h3>
        </div>
    )
})
const squad = Object.keys(season.curr_p10).slice(1,11).map(data => {
    return (
        <div> 
            <h3>{season.curr_p10[data].label} {season.curr_p10[data].value}</h3>
        </div>
    )
})
    // const scoresSection =
    // season &&
    // season
    //   .filter(misc => misc.key === 'Matches Played' || misc.key === 'Score')
    //   .map((data, index) => {
    //     return (
    //       <div key={index}>
    //         {data.key} <br/>
    //         {data.value}
    //       </div>
    //     );
    //   });

    // const { curr_p2, curr_p9, curr_p10 } = season;

  return (
  <div>
      <SubNavigation/>
      <h1>solo</h1>
      {solo}
      <h1>duo</h1>
      {duo}
      <h1>squad</h1>
      {squad}
  </div>
  );
};

export default CurrentSeason;
