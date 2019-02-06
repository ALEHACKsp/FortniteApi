import React, { Component } from "react";

class FortniteApi extends Component {
  state = {
    data: null
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
        this.setState({ data: myJson });
      });
  };

  render() {
    return <h1> {this.state.data && this.state.data.epicUserHandle} </h1>;
  }
}

export default FortniteApi;
