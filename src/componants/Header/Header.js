import React from "react";
import "./Header.css";


const Header = (props) => {


  
  

    return (
      <div className="header"> <h1 className="username"> {props.user}  </h1>
      <img className="title" src="https://www.parisgamesweek.com/media/upload/article/content/Fortnite_Black_Logo.png" alt="fortnite"></img>
  
    {/* <form>
    <label>
      <input type="text" name="name" onChange={event => props.handleChange(event) } />
    </label>
  </form> */}
  </div> 
    );
  }



export default Header;