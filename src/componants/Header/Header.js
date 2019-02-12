import React, { Component } from "react";
import "./Header.css";


class Header extends Component {



  render() {
    return <div className="header"> <h1 className="username"> display username </h1>
    <form>
    <label>
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form></div> ;
  }
}

export default Header;