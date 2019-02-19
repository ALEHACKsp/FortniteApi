import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom';
import {Arrow} from "./Navarrows"

function Nav() {

    return (
        <div className="nav">
      <ul className="navbar">
        <Link> {"./"} </Link>
            <li className="section"><a href="/playerstats">Player stats</a><Arrow/></li>
            <li className="section"><a href="/matchhistory">Match History</a><Arrow/></li>
            <li className="section"><a href="/store">Store</a><Arrow/></li>
          </ul>
        </div>
    );
}

export default Nav;