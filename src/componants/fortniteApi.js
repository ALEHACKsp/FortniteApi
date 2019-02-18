import React, { Component } from "react";
import "./FortniteApi.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";


class FortniteApi extends Component {
  state = {
    data: null,
    stats: null,
  };

  componentDidMount() {
    this.fetchFortniteData();
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

  render() {
    return <div className="wrapper"> 
      <Header props={this.state.data} />
    <Nav />
    <div className="statscontainer"  > {this.state.stats && this.state.stats.map((data, index) => {
      // console.log(index)
      return (
        <ul className="stats" key={index}>
        <li className="keystyle">
        {data.key}:
        </li>
      
        <li className="scorestyle">
        {data.value}
        </li>
        </ul>
      )
    }
     
      )}
    </div>
    </div>;
  }
}

export default FortniteApi;
