import React, { useState } from 'react';

import styled from 'styled-components';

const HomePage = styled.div`
  width: 100%;
  // overflow: hidden;
  // background-size: cover;
  > img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const InputSearch = styled.div`
  width: 30%;
  position: absolute;
  // right: 0;
  padding-left: 30px;
  top: 0;
  margin-top: 13rem;
`;

const Home = ({ fetchData, location }) => {
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
      <img
        alt=""
        src="https://progameguides.com/wp-content/uploads/2019/05/fortnite-loading-screen-stratus.jpg"
      />
      <InputSearch>
        <h1
          style={{
            color: 'white',
            fontSize: '3.5rem',
            fontWeight: '900'
          }}
        >
          Find user
        </h1>
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
          <div style={{ height: '30px', border: '1px solid red' }}>
            <input
              type="text"
              value={value}
              placeholder="Enter username    'Ninja' "
              style={{ width: '80%', height: '100%' }}
              onChange={onChange}
            />
            <input
              type="submit"
              value="Go"
              style={{
                opacity: '0.5',
                background: 'lightgreen',
                height: '100%',
                width: '50px',
                color: 'black',
                margin: 0
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
    </HomePage>
  );
};

export default Home;
