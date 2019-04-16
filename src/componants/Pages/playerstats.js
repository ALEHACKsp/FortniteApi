import React from 'react';

import styled from 'styled-components';

function Playerstats(props) {

  // console.log("this is the playerstats", props.wholeState.stats)

    return (
        <div className="playercontainer">
            {props.wholeState.stats && props.wholeState.stats.map((data, index) => {
  return (
    <ul className="stats" key={index}>
    <li className="keystyle">
    {data.key}:
    </li>
  
    <li className="scorestyle">
    {data.value}
    </li>
    </ul>
  )
}
  )}
        </div>
    );
}

export default Playerstats;
