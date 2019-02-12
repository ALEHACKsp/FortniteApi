import React, { Component } from "react";
import "./Nav.css";


class Nav extends Component {



  render() {
    return <nav className="nav">
   <a href="/">Home</a>
    <a href="/">News</a>
    <a href="/">Contact</a>
    <a href="/">About</a></nav>
  }
}

export default Nav;