import React, { Component } from "react";

import "./App.css";
import FortniteApi from "./componants/FortniteApi";
import Header from "./componants/Header/Header";
import Nav from "./componants/Nav/Nav";

class App extends Component {
  render() {
    return <div><Header /><Nav /> <FortniteApi /></div> 
    ;
  }
}

export default App;
