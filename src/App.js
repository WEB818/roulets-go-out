import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DateDetails from "./components/DateDetails/DateDetails";

import DateRequest from "./components/DateRequest/DateRequest";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: "",
      type: "fun",
      showDetails: false,
      error: null,
    };
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleSearch = (place) => {
    this.setState({ restaurant: place });
  };

  handleTypeChange = (ev) => {
    this.setState({ type: ev.target.value });
  };

  handleDisplayDetails = () => {
    this.setState({ showDetails: true });
  };

  handlePlay = (ev) => {
    ev.preventDefault();
    let location = ev.target.location;
    let term = ev.target.type;
    let index = this.getRandomIndex(49);

    return fetch(
      `/search?location=${location.value}&term=${term.value}&limit=50`,
      {
        headers: {
          Authorization:
            "Bearer 2APMxAYvJrfmFebWwHD2JlTlAt76NaBbxBuxv5ingWBb9Y82tNAi0spswrA5GiVmOtiB8QaDV_00SMQa3ELaBXbuFFDIevpWdd6628WPlj7PKfnMRM55PWo2eGtyX3Yx",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => this.handleSearch(res.businesses[index]))
      .then(this.handleDisplayDetails())
      .catch((err) => this.setState({ error: err }));
  };

  handleReplay = () => {
    this.setState({ restaurant: "", showDetails: false });
  };

  render() {
    const { restaurant, type } = this.state;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/play">
            <DateDetails
              getLocation={this.handlePlay}
              type={type}
              restaurant={restaurant.name}
              image={restaurant.image_url}
              replay={this.handleReplay}
              onChange={this.handleTypeChange}
              onRedirect={this.redirectToTarget}
              details={this.state.showDetails}
              price={restaurant.price}
              rating={restaurant.rating}
              address={restaurant.display_address}
              link={restaurant.url}
            />
          </Route>

          <Route path="/message">
            <DateRequest />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
