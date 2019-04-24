import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import styled from 'styled-components';

// import components;
import Header from "./Header/Header";
import Nav from "./Nav/Nav";


// Import routing pages
import Playerstats from './Pages/playerstats';
import Challenges from './Pages/challenges';
import Store from './Pages/store';


import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${props => (props.whiteColor ? 'blue' : 'black')}
    font-size: 16px;
  }
`

const Wrapper = styled.div`
margin: 0 auto;
`


class FortniteApi extends Component {
  state = {
    data: null,
    stats: null,
    store: null,
    status: null,
    challenges: null,
    // username: "",
  };

  componentDidMount() {
    this.fetchFortniteData();
    this.fetchFortniteStore();
    this.fetchFortniteStatus();
    this.fetchFortniteChallenges();
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log("error", error);
  }

  fetchFortniteData = () => {
    fetch("/v1/profile/pc/popps01", {
      headers: new Headers({
        "TRN-Api-Key": process.env.REACT_APP_TRN
      })
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
      
        const epicName = myJson.epicUserHandle;
        const lifeTimeStats = myJson.lifeTimeStats;
        // console.log(lifeTimeStats)
        this.setState({ data: epicName, stats: lifeTimeStats });
      });
  };

  fetchFortniteStore= () => {
    fetch("/v1/store", {
      headers: new Headers({
        "TRN-Api-Key": process.env.REACT_APP_TRN
      })
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ store: myJson });
      });
  };

  fetchFortniteStatus= () => {
    fetch("https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ status: myJson });
      });
  };


  // handleChange = (event) =>{
    
  //   console.log("this is the event", event.target.value)
  //   const value = event.target.value;
  //   this.setState({username: value})
  //   }

    fetchFortniteChallenges= () => {
      fetch("https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          const weeks = myJson;
          this.setState({ challenges: weeks });
        });
    };

    

  render() {
    return <Wrapper>
      <GlobalStyle whiteColor/>
      <Header user={this.state.data} status={this.state.status} handleChange={this.handleChange} />
      <Nav/>
      
      <Switch>
        <Route exact path="/"/> 
        <Route path="/playerstats" render={()=> <Playerstats stats={this.state.stats} />}/>
        <Route path="/challenges" render={()=> <Challenges wholeState={this.state} />}/>
        <Route path="/store" render={()=> <Store wholeState={this.state} />}/>
      </Switch>
    </Wrapper>
  
  }
}



export default FortniteApi;
