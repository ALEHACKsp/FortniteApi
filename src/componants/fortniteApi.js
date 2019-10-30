import React, { Component } from 'react';
// import { Route, Switch, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// import components;
// import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

// Import routing pages
import { withRouter } from "react-router";

import RouterComponent from './Pages/RouterComponent';

// Import Error pages

// import NotFound from './Error/NotFound';
// import { createGlobalStyle } from 'styled-components';


// const GlobalStyle = createGlobalStyle`
//   body {
//     // background-color: ${props => (props.whiteColor ? 'blue' : 'black')}
//     // overflow-y: 1;
//     // overflow-y:hidden;
//     font-size: 16px;
//     margin: 0 10rem;
//   }
// `;

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
    id: null,
    news: null,
    seasonStats: null
  };
  
  componentDidMount() {
    this.fetchFortniteChallenges();
    this.fetchFortniteStore();
    this.fetchFortniteIngameNews();

  }

  componentDidCatch(error, info) {
    console.log('error', error);
  }

  fetchFortniteData = username => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.unvaulted.co.uk/api/stats?username=${username}`, {
      })
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          //cuur_p2. solo, curr_p9 squad,  curren_p10 duo, p2 lifetime solo, p9 lifetime squad, p10 lifetime duo
          // console.log("stats data", myJson)
          const epicName = myJson.epicUserHandle;
          const lifeTimeStats = myJson.lifeTimeStats;
          const currnentSeasonStats = myJson.stats;
          const accountID = myJson.recentMatches[0].accountId;
          this.setState({
            name: epicName,
            stats: lifeTimeStats,
            seasonStats: currnentSeasonStats,
            id: accountID
          });
          this.fetchFortniteMatchHistory(accountID);
          // console.log("this is account id", accountID)
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
    fetch('https://api.unvaulted.co.uk/api/store', {
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
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log("myJson",myJson)
        const weeks = myJson;
        this.setState({ challenges: weeks });
      });
  };
  fetchFortniteIngameNews = () => {
    fetch(
      'https://fortnite-api.theapinetwork.com/br_motd/get',
      {
        headers: new Headers({
          Authorization: 'a640bb28c19e78924fc782dadce360f3'
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const newsObj = myJson;
        this.setState({ news: newsObj });
      });
  };
  
  fetchFortniteMatchHistory = accountID => {
    fetch(`https://api.unvaulted.co.uk/api/history?accountID=${accountID}`, {
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
        <Nav user={this.state.name} fetchData={this.fetchFortniteData} location={this.props.history} />
        <RouterComponent
          fetchData={this.fetchFortniteData}
          stats={this.state.stats}
          history={this.state.history}
          challenges={this.state.challenges}
          store={this.state.store}
          id={this.state.id}
          news={this.state.news}
          season={this.state.seasonStats}
        />
        <Footer />
      </Wrapper>
    );
  }
}

export default withRouter(FortniteApi);
