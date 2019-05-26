import React, { Component } from 'react';
// import { Route, Switch, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// import components;
// import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

// Import routing pages

import RouterComponent from './Pages/RouterComponent';

// Import Error pages

// import NotFound from './Error/NotFound';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${props => (props.whiteColor ? 'blue' : 'black')}
    // overflow-y: 1;
    // overflow-y:hidden;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

class FortniteApi extends Component {
  state = {
    name: null,
    stats: null,
    store: null,
    status: null,
    challenges: null,
    history: null,
    id: null
  };

  componentDidMount() {
    this.fetchFortniteStore();
    this.fetchFortniteChallenges();
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log('error', error);
  }

  fetchFortniteData = username => {
    return new Promise((resolve, reject) => {
      fetch(`/v1/profile/pc/${username}`, {
        headers: new Headers({
          'TRN-Api-Key': process.env.REACT_APP_TRN
        })
      })
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          const epicName = myJson.epicUserHandle;
          const lifeTimeStats = myJson.lifeTimeStats;
          const accountID = myJson.recentMatches[0].accountId;
          this.setState({
            name: epicName,
            stats: lifeTimeStats,
            id: accountID
          });
          this.fetchFortniteMatchHistory(accountID);
          resolve('Success');
          return accountID;
        })
        .catch(error => {
          reject(error);
          return error;
        });
    });
  };

  fetchFortniteStore = () => {
    fetch('/v1/store', {
      headers: new Headers({
        'TRN-Api-Key': process.env.REACT_APP_TRN
      })
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ store: myJson });
      });
  };

  fetchFortniteChallenges = () => {
    fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current',
      {
        headers: new Headers({
          Authorization: 'a640bb28c19e78924fc782dadce360f3'
          // 'api-key': 'a640bb28c19e78924fc782dadce360f3' 'Bearer ' +
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const weeks = myJson;
        this.setState({ challenges: weeks });
      });
  };

  fetchFortniteMatchHistory = accountID => {
    fetch(`/v1/profile/account/${accountID}/matches`, {
      headers: new Headers({
        'TRN-Api-Key': process.env.REACT_APP_TRN
      })
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const matches = myJson.slice(0, 20);
        this.setState({ history: matches });
      });
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyle whiteColor />
        {/* <Header
          user={this.state.name}
          status={this.state.status}
        /> */}
        <Nav user={this.state.name} />
        <RouterComponent
          fetchData={this.fetchFortniteData}
          stats={this.state.stats}
          history={this.state.history}
          challenges={this.state.challenges}
          store={this.state.store}
          id={this.state.id}
        />
        <Footer />
      </Wrapper>
    );
  }
}

export default FortniteApi;
