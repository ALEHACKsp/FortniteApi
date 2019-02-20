import React from 'react';

function Playerstats(props) {

    return (
        <div>
            <h1> this is the player stats page</h1>
            {props.playerstats && props.playerstats.map((data, index) => {
  console.log(data)
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
