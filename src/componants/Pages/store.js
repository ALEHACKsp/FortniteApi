import React from 'react';
import styled from 'styled-components';
import Vbucks from './v-bucks.png'

const StoreCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  height: 100%
  justify-content: center;
  align-items: scenter;
  background-color: #e9edf1;
  @media (max-width: 748px) {
    width: 24.2%;
    border: 1px solid darkgrey;
  }
  > h5 {
    color: white;
  }
`;
const StoreCardImg = styled.img`
    width: 100%;
    height: 100%;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  @media (max-width: 748px) {

  }
`;
const VBucksCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 25px;
  height: 25px;
  > h5 {
    color: white;
  }
`;

const Store = ({ store }) => {

  const getStyle = (data) => {
    switch(data.rarity) {
      case "Rare":
     return  {
       backgroundColor: "#0B4074"
     }
     case "Epic":
        return  {
          backgroundColor: "#52218D"
        }

        case "Handmade":
            return  {
              backgroundColor: "#019623"
            }
    
            case "Quality":
                return  {
                  backgroundColor: "#B9B9B8"
                }
        
                default:
       }
    }
  
  // console.log("this is the store", store)
  const displayList =
    store &&
    store.map((data, index) => {
      return (
        <StoreCard key={index} style={getStyle(data)}>
          <h5 style={{textAlign: "center", minHeight: "32px", marginTop: "0", marginBottom: "0"}}>{data.name}</h5>
          <StoreCardImg src={data.imageUrl} alt="(unvaulted) Current store" name="unvaulted" />
          <VBucksCard>
            <img
              style={{width: "25px", maxHeight:  "25px"}}
              src={Vbucks}
              alt="(unvaulted) vBucks"
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
