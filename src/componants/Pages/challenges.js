import React from 'react';

function Challenges(props) {
//     console.log('props', props.wholeState.challenges)
//   console.log('challanges', props.state.weeks)
   if (!props.wholeState.challenges) {
    return null;
   }
//    console.log("this is the props in challenges", props.weeks.challenges)
const weeklyChallenges = Object.entries(props.wholeState.challenges.challenges).map((data) => {
    data[1].map((array,index) => {
    // console.log(array.challenge)
    return (
        <div>{array.challenge}</div>
    )
    })
    return (
        <div>
        <h2>{data[0]}</h2>
        
        {data.map((data, index)=> {
            // console.log("innner side",data, index)
            return (
                <div>
                    {/* <h4>{data[0].challenge}</h4>
                    <h4>{data[1].challenge}</h4>
                    <h4>{data[2].challenge}</h4>
                    <h4>{data[3].challenge}</h4>
                    <h4>{data[4].challenge}</h4>    */}
                </div> 
            )
        })}
        </div>
    )
});
const currentWeek = Object.keys(props.wholeState.challenges).map((data) => {
                
    // console.log(data + ': ' + props.weeks[data]);
    if (data === "currentweek") {
     return (
         <h2> {data + ': ' + props.wholeState.challenges[data]}</h2>
     )
    }
    if (data === 'season') {
        return (
            <h2> {data + ': ' + props.wholeState.challenges[data]}</h2>
        )
    }
});
       

    return (
        <div>
            
            <h1>Challenges</h1>
            {currentWeek}
            {weeklyChallenges}   
    </div>
);
}

export default Challenges;
