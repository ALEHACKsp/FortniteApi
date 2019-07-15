import React from 'react';
import styled from 'styled-components';
import Vbucks from './v-bucks.png'

const StoreCard = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  background-color: #e9edf1;
  // width: 10%;
  // border-radius: 0.8rem;
  // margin-bottom: 30px;
  @media (max-width: 748px) {
    width: 24.2%;
    border: 1px solid darkgrey;
  }
`;
const StoreCardImg = styled.img`
  width: 100%;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // margin: 1.25rem;
  // padding-top: 2rem;
  // justify-content: space-between;
  @media (max-width: 748px) {
    // flex-direction: column;
    // align-items: center;
  }
`;
const VBucksCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 25px;
  height: 25px;
`;

const Store = ({ store }) => {
  // console.log("this is the store", store)
  const displayList =
    store &&
    store.map((data, index) => {
      return (
        <StoreCard key={index}>
          <h5 style={{textAlign: "center", minHeight: "32px", marginTop: "0", marginBottom: "0"}}>{data.name}</h5>
          <StoreCardImg src={data.imageUrl} alt="(unvaulted) Current Fortnite store image" name="unvaulted" />
          <VBucksCard>
            <img
              style={{width: "25px", maxHeight:  "25px"}}
              src={Vbucks}
              alt="(unvaulted) Fortnite vBuck image"
              name="unvaulted"
            />
            <h5>{data.vBucks}</h5>
          </VBucksCard>
        </StoreCard>
      );
    });
  return <StoreWrapper>{displayList}</StoreWrapper>;
};

export default Store;
