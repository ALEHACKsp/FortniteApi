import React from 'react';
import './playerstats.css';

function Playerstats(props) {

  // console.log("this is the playerstats com", props)

    return (
        <div className="playercontainer">
            {props.playerstats && props.playerstats.map((data, index) => {
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
