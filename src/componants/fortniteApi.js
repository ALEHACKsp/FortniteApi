import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// import components;
import Header from './Header/Header';
import Nav from './Nav/Nav';

// Import routing pages
import Home from './Pages/Home';
import Lifetime from './Pages/Stats/Lifetime';
import History from './Pages/Stats/History';
import Challenges from './Pages/Challenges';
import Store from './Pages/store';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${props => (props.whiteColor ? 'blue' : 'black')}
    // overflow-y: 1;
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
    this.fetchFortniteData();
    this.fetchFortniteStore();
    this.fetchFortniteStatus();
    this.fetchFortniteChallenges();
    this.fetchFortniteMatchHistory();
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log('error', error);
  }

  fetchFortniteData = () => {
    fetch('/v1/profile/pc/popps01', {
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
        this.setState({ name: epicName, stats: lifeTimeStats, id: accountID });
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

  fetchFortniteStatus = () => {
    fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status'
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ status: myJson });
      });
  };

  fetchFortniteChallenges = () => {
    fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current'
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const weeks = myJson;
        this.setState({ challenges: weeks });
      });
  };

  fetchFortniteMatchHistory = () => {
    fetch('/v1/profile/account/954f2029-7c09-41b5-ac03-a9aad2c94809/matches', {
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
        <Header
          user={this.state.name}
          status={this.state.status}
          handleChange={this.handleChange}
        />
        <Nav />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home stats={this.state.stats} />}
          />
          <Route
            path="/lifetime"
            render={() => <Lifetime stats={this.state.stats} />}
          />
          <Route
            path="/history"
            render={() => <History history={this.state.history} />}
          />
          <Route
            path="/challenges"
            render={() => <Challenges challenges={this.state.challenges} />}
          />
          <Route
            path="/store"
            render={() => <Store wholeState={this.state} />}
          />
        </Switch>
      </Wrapper>
    );
  }
}

export default FortniteApi;
