import React from 'react';
import "./Nav.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Playerstats from '../Pages/playerstats';
import Matchhistory from '../Pages/matchhistory'
import Store from '../Pages/store'
import {Arrow} from "./Navarrows"


function Nav() {

    return (
    
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

      <hr />

      <Route exact path="/playerstats" component={Playerstats} />
      <Route path="/matchhistory" component={Matchhistory} />
      <Route path="/store" component={Store} />
    </div>
  </Router>
      
    );
}

export default Nav;