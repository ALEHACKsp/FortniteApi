import React from 'react';
import styled from 'styled-components';

const StoreCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9edf1;
  width: 15%;
  border-radius: 0.8rem;
  margin-bottom: 30px;
  @media (max-width: 748px) {
    width: 90%;
  }
`;
const StoreCardImg = styled.img`
  width: 60%;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.25rem;
  padding-top: 2rem;
  justify-content: space-between;
  @media (max-width: 748px) {
    flex-direction: column;
    align-items: center;
  }
`;
const VBucksCard = styled.div`
  display: flex;
  width: 25;
  height: 25;
  align-items: center;
`;

const Store = ({ store }) => {
  console.log(store);

  const displayList =
    store &&
    store.map((data, index) => {
      return (
        <StoreCard key={index}>
          <h3>{data.name}</h3>
          <StoreCardImg src={data.imageUrl} alt="(unvaulted) Current Fortnite store image" name="unvaulted" />
          <VBucksCard>
            <img
              src="https://img.icons8.com/color/48/000000/v-bucks.png"
              alt="(unvaulted) Fortnite vBuck image"
              name="unvaulted"
            />
            <h3>{data.vBucks}</h3>
          </VBucksCard>
        </StoreCard>
      );
    });
  return <StoreWrapper>{displayList}</StoreWrapper>;
};

export default Store;
