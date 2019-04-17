import React from 'react';
import styled from 'styled-components'


const StoreCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 21.5%;
`
const StoreCardImg = styled.img`
width: 60%
`

const StoreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 4%;
    justify-content: space-between;
`
const VBucksCard = styled.div`
    display: flex;
    width: 25;
    height: 25;
    align-items: center;
`




function Store(props) {
   
    // console.log(props.wholeState.store)
   const displayList  = props.wholeState.store && props.wholeState.store.map((data, index) => {

        return (
            <StoreCard key={index}>
                <h3>{data.name}</h3>
                <StoreCardImg src={data.imageUrl} alt="Store images"></StoreCardImg>
                <VBucksCard>
                <img src="https://img.icons8.com/color/48/000000/v-bucks.png" alt='something'></img>
                <h3>{data.vBucks}</h3>
                </VBucksCard>
            </StoreCard>
        )
  })
    return (
        <StoreWrapper>
            {displayList}
        </StoreWrapper>
    );
}

export default Store;
