import React, { Component } from "react";
import "./FortniteApi.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";


// Import routing components
import Playerstats from './Pages/playerstats';
import Challenges from './Pages/challenges';
import Store from './Pages/store';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Arrow} from "./Nav/Navarrows";


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
    return <div className="wrapper"> 
    
      <Header user={this.state.data} handleChange={this.handleChange} />
      <Nav/>
      <Switch>
        <Route exact path="/"/> 
        <Route exact path="/playerstats" render={()=> <Playerstats wholeState={this.state} />}/>
        <Route path="/challenges" render={()=> <Challenges wholeState={this.state} />}/>
        <Route path="/store" render={()=> <Store wholeState={this.state} />}/>
      </Switch>
    
    </div>;
  }
}



export default FortniteApi;
