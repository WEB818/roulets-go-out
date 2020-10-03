import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DateDetails from "./components/DateDetails/DateDetails";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurant: "",
      type: "fun",
      details: "",
      showDetails: false,
      setDate: false,
      error: "",
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

  handleSearch = (arr) => {
    let length = arr.length - 1;
    let index = this.getRandomIndex(length);
    let restaurant = arr[index];
    this.setState({ restaurants: arr, restaurant: restaurant });
  };

  handleTypeChange = (ev) => {
    this.setState({ type: ev.target.value });
  };

  handleDisplayDetails = () => {
    this.setState({ showDetails: true });
  };

  handleError = (err) => {
    this.setState({ error: err.message });
  };

  handlePlay = (ev) => {
    ev.preventDefault();
    let location = ev.target.location;
    let term = ev.target.type;

    return fetch(
      `/search?location=${location.value}&term=${term.value}&limit=50`,
      {
        headers: {
          Authorization:
            "Bearer 2APMxAYvJrfmFebWwHD2JlTlAt76NaBbxBuxv5ingWBb9Y82tNAi0spswrA5GiVmOtiB8QaDV_00SMQa3ELaBXbuFFDIevpWdd6628WPlj7PKfnMRM55PWo2eGtyX3Yx",
          "Access-Control-Allow-Origin": "https://roulets-go-out.vercel.app/",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => this.handleSearch(res.businesses))
      .then(this.handleDisplayDetails())
      .catch((err) => this.handleError(err));
  };

  handleReplay = () => {
    this.setState({ restaurant: "", showDetails: false, error: false });
  };

  handleDateRequest = () => {
    this.setState({ setDate: true, error: false });
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
              restaurant={restaurant ? restaurant.name : "Spinning..."}
              replay={this.handleReplay}
              onChange={this.handleTypeChange}
              onRedirect={this.redirectToTarget}
              details={this.state.showDetails}
              price={restaurant ? restaurant.price : ""}
              rating={restaurant ? restaurant.rating : ""}
              address={
                restaurant ? restaurant.location.display_address.join(", ") : ""
              }
              link={restaurant ? restaurant.url : ""}
              dateRequest={this.handleDateRequest}
              itsADate={this.state.setDate}
              error={this.state.error}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
