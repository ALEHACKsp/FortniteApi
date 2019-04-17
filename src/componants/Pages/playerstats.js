import React from 'react';

import styled from 'styled-components';



const Playerstats = ({ stats }) => {

  // console.log("this is the playerstats", stats)

    const scoresSection = stats && stats.filter((misc) => misc.key === 'Matches Played' || misc.key === 'Score')
    .map(data => {
     return (
         <p style={{color: 'red'}}>{data.key} : {data.value}</p>
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
        <div>
        <h1>Lifetime stats</h1>
        {scoresSection}
        {winsSection}
        {killsSection}
        {placementSection}
        </div>
    );
}

export default Playerstats;
