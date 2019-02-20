import React, { Component } from "react";
import "./Header.css";

class Header extends Component {

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <div className="header"> <h1 className="username">  </h1>
    <form>
    <label>
      <input type="text" name="name" onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Submit" />
  </form></div> 
    );
  }
}



export default Header;