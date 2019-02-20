import React, { Component } from "react";
import "./FortniteApi.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

// Import routing components
import Playerstats from './Pages/playerstats';
import Matchhistory from './Pages/matchhistory';
import Store from './Pages/store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Arrow} from "./Nav/Navarrows";


class FortniteApi extends Component {
  state = {
    data: null,
    stats: null,
    history: null,
    store: null,
    status: null,
  };

  componentDidMount() {
    this.fetchFortniteData();
    this.fetchFortniteStore();
    this.fetchFortniteStatus();
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
        console.log("Json",myJson)
        // const epicName = myJson.epicUserHandle;
        // const lifeTimeStats = myJson.lifeTimeStats;
        // console.log(lifeTimeStats)
        this.setState({ store: myJson });
      });
  };

  fetchFortniteStatus= () => {
    fetch("https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log("Json",myJson)
        // const epicName = myJson.epicUserHandle;
        // const lifeTimeStats = myJson.lifeTimeStats;
        // // console.log(lifeTimeStats)
        this.setState({ status: myJson });
      });
  };




// <div className="statscontainer"  > {this.state.stats && this.state.stats.map((data, index) => {
//   // console.log(index)
//   return (
//     <ul className="stats" key={index}>
//     <li className="keystyle">
//     {data.key}:
//     </li>
  
//     <li className="scorestyle">
//     {data.value}
//     </li>
//     </ul>
//   )
// }
//   )}
// </div>

  render() {
    return <div className="wrapper"> 
      <Header user={this.state.data} />
      <Router>
    <div className="nav">
      <ul className="navbar">
        <li>
          <Link to="/playerstats">Player stats<Arrow/></Link>
        </li>
        <li>
          <Link to="/matchhistory">Match History<Arrow/></Link>
        </li>
        <li>
          <Link to="/store">Store<Arrow/></Link>
        </li>
      </ul>


      <Route path="/playerstats" component={props => (
    <Playerstats
        playerstats={this.state.stats}  
    />
)} />
      <Route path="/matchhistory" component={props => (
    <Matchhistory
        store={this.state.store}  
    />
)} />
      <Route path="/store" component={props => (
    <Store
        store={this.state.store}  
    />
)} />
    </div>
  </Router>
    </div>;
  }
}



export default FortniteApi;
