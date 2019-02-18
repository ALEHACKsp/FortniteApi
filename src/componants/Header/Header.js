import React from 'react';
import "./Header.css";




function Header(props) {
console.log("this is props",props)

    return (
      <div className="header"> <h1 className="username"> {props.props} </h1>
    <form>
    <label>
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form></div> 
    );
}

export default Header;