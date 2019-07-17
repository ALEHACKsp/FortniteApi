import React, { useState } from 'react';
// import backgroundImage from './fortnite-loading-screen-stratus.jpg';
import homePageVideo from './FNBR_Season9_Cine_compressed.mp4'
import styled from 'styled-components';

import News from './in_game_news'
import Store from './store'

const HomePage = styled.div`
  // height: 100vh;
  width: 100%;
  // overflow: hidden;
  // background-size: cover;
  > img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
const IntroContainer = styled.div`
text-align: center; 
// padding-top: 60px;
// padding-bottom: 58px;

> h1 {
  font-size: 24px;
  font-weight: 600;
}
> h4 {
  font-weight: 300;
  padding: 0 1rem;
}
// @media (max-width: 748px) {
//   height: "40vh", 
//   width: "100vw"
// }
`

const InputSearch = styled.div`
  width: 40%;
  // position: absolute;
  // padding-left: 30px;
  // top: 0;
  // margin-top: 13rem;
  > h3 {
    color: black;
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 300;
    text-align: center;
  }
  @media (max-width: 748px) {
    width: 100%;
    // bottom: 0;
    margin-bottom: 60px;
  }
`;




const Home = ({ fetchData, location, news, store }) => {
  
  const [value, setvalue] = useState('');

  const [error, setError] = useState('');

  const onChange = e => {
    setvalue(e.target.value);
  };

  const handleError = error => {
    setError(error);
  };


  return (
    <HomePage>
      <IntroContainer>
      <h1><b>Unvaulted</b></h1>
      <video loop autoPlay style={{width: "100vw", height: "240"}}>
    <source src={homePageVideo} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
    </video>
      {/* <iframe allow="autoplay" allowfullscreen="false" src={homePageVideo}></iframe> */}
      <h4>Fortnite stats app for desktop/mobile.  Search your stats, match history, current season challenges and much more!</h4>
      </IntroContainer>
      
      
       {/* <img name="unvaulted" alt="Fortnite image from latest season" src={backgroundImage} /> */}
      <InputSearch>
        <h3
          style={{
            color: 'black',
            fontSize: '1rem',
            fontWeight: '300'
          }}
        >
          Find user
        </h3>
        <form
          onSubmit={e => {
            e.preventDefault(
              fetchData(value)
                .then(data => {
                  console.log(data);
                  return location.history.push('/lifetime');
                })
                .catch(error => {
                  handleError(error);
                  return error;
                })
            );
          }}
        >
          <div
            style={{
              height: '2rem',
              // border: '1px solid red',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <input
              type="text"
              value={value}
              placeholder=" 'Ninja' "
              style={{
                width: '80%',
                height: '100%',
                border: '0',
                padding: '0',
                backgroundColor: 'lightgrey'
              }}
              onChange={onChange}
            />
            <input
              type="submit"
              value="Go"
              style={{
                opacity: '0.5',
                background: 'lightgreen',
                height: '100%',
                width: '20%',
                color: 'black',
                margin: 0,
                border: '0',
                padding: '0'
              }}
            />
          </div>
        </form>
        {error ? (
          <div>
            <h2
              style={{
                color: 'white',
                fontSize: '2rem',
                fontWeight: '500'
              }}
            >
              User not found! try again
            </h2>
          </div>
        ) : (
          ''
        )}
      </InputSearch>
      <h3>Daily Store</h3>
      <Store store={store}/>
      <h3>Latest News</h3>
      <News news={news} location={location}/>
    </HomePage>
  );
};

export default Home;
