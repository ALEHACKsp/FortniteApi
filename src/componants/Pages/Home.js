import React, { useState } from 'react';

import styled from 'styled-components';

const HomePage = styled.div`
  width: 100%;
  height: auto;
  > img {
    width: 100%;
    height: auto;
  }
`;

const InputSearch = styled.div`
  width: 30%;
  position: absolute;
  // right: 0;
  padding-left: 30px;
  top: 0;
  margin-top: 16rem;
`;

const Home = ({ fetchData, location }) => {
  const [value, setvalue] = useState('');

  const onChange = e => {
    setvalue(e.target.value);
  };
  console.log('location', location);

  //if user is found redirect to player stats page, otherwives output an error message on this page
  return (
    <HomePage>
      <img
        alt=""
        src="https://progameguides.com/wp-content/uploads/2019/05/fortnite-loading-screen-stratus.jpg"
      />
      <InputSearch>
        <h1
          style={{
            color: 'white',
            fontSize: '4rem',
            fontWeight: '900'
          }}
        >
          Find user
        </h1>
        <form
          onSubmit={e => {
            e.preventDefault(fetchData(value));
            if (value) {
              location.history.push('/lifetime');
            }
            console.log('value', value);
          }}
        >
          <input
            type="text"
            value={value}
            placeholder="enter username"
            style={{ width: '50%', height: '30px' }}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Go"
            style={{
              opacity: '0.5',
              background: 'yellow',
              height: '36px',
              width: '40px'
            }}
          />
        </form>
      </InputSearch>
    </HomePage>
  );
};

export default Home;
