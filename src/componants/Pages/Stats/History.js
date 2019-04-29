import React from 'react';
import SubNavigation from './SubNav'
import styled from 'styled-components';


const Wrapper = styled.div`
margin: 1.25rem;
overflow: hidden;
border-left: 1px solid lightgrey;
`


const InformationContainer = styled.div`
display: flex;
flex-direction: column;
width: 47%;

`



// const ScoresSection = styled.p`
//     display: flex;
//     justify-content: space-around;
//     font-family: BurbankBigCondensed-black;
//     width: 100%;
//     height: 6rem;
//     text-transform: uppercase;
//     font-size: 2rem;
//     font-weight: 900;
//     background: linear-gradient(to top, #00cc66 0%, #009900 100%);
//     clip-path: polygon(2% 8%, 98% 2%, 99% 97%, 1% 91%);
//     margin-left: 2rem;
  
// `
// const SectionText = styled.span`
// color: white;
// margin-top: 2rem;
// `

// const WinsSection = styled(ScoresSection)`
// background: linear-gradient(to top, #0033cc 21%, #3366ff 78%);
// margin-left: 5rem;
// `

// const KillsSection = styled(ScoresSection)`
// background: linear-gradient(to top, #ff9900 0%, #ff9933 100%);
// right:0;
// bottom: 0;
// margin-right: 3rem;
// margin-bottom: 4rem;
// `

const StatsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 3px solid lightgrey;
background-color: #e9edf1;
`

// const PlacementSection = styled(ScoresSection)`
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// place-content: space-evenly;
// width: 90%;
// height: 90%;
// background: linear-gradient(to top, #ffff99 0%, #ffff00 100%);
// clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 97%);

// `

// const PlacementSectionText = styled.span`
// font-size: 2.4rem
// padding-left: 4rem;
// &:first-child {

// // padding-left: 100px;
// }
// `



const History = () => {


    return (
        <Wrapper>
        <SubNavigation/>
        <StatsContainer>
        <InformationContainer>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>

        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        </InformationContainer>
        
        </StatsContainer>
       </Wrapper>
    );
}

export default History;
